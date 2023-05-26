export function TodoReducer(state: any = [], action: any) {
  if (action.type == 'ADD_TODO') {
    return [...state, action.payload];
  } else if (action.type == 'COMPLETE') {
    console.log('state', state);
    let current = state.find((item: any) => item.id == action.payload);
    current.completed = !current.completed;
    return [...state];
  } else {
    return state;
  }
}

