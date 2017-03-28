export const ideas = (state = [], action) => {
  console.log('inside REDUCER');
  switch (action.type) {
    case 'ADD_IDEA':
      return [ ...state, action.idea ];
    case 'DELETE_IDEA':
      return state.filter((idea) => idea.id !== action.id);
    default:
      return state;
  }
}
