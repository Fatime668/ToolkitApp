import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

interface TaskModalProps {
  visible: boolean;
  onClose: () => void;
  onAddTask: (task: {task: string; category: string}) => void;
}

const TaskModal: React.FC<TaskModalProps> = ({visible, onClose, onAddTask}) => {
  const [taskInput, setTaskInput] = useState('');
  const [categoryInput, setCategoryInput] = useState('');

  const handleAddTask = () => {
    const newTask = {
      task: taskInput,
      category: categoryInput,
    };
    onAddTask(newTask);
    setTaskInput('');
    setCategoryInput('');
  };

  const handleOverlayPress = () => {
    onClose();
  };

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <TouchableWithoutFeedback onPress={handleOverlayPress}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Add Data</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter title"
                value={taskInput}
                onChangeText={text => setTaskInput(text)}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Enter category"
                value={categoryInput}
                onChangeText={text => setCategoryInput(text)}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  columnGap: 16,
                }}>
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={handleAddTask}>
                  <Text style={styles.addButtonLabel}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
                  <Text style={styles.cancelButtonLabel}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default TaskModal;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#DADADA',
    width: '80%',
    padding: 20,
    borderRadius: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#575767',
  },
  textInput: {
    width: '100%',
    height: 40,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: '#575767',
  },
  addButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: 100,
  },
  addButtonLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
  },
  cancelButton: {
    backgroundColor: 'tomato',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: 100,
  },
  cancelButtonLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
  },
});
