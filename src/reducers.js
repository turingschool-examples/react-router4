export const ideas = (state = [], action) => {
  switch (action.type) {
    case 'ADD_IDEA':
      Object.assign(action.idea, { id: Date.now() });
      return [ ...state, action.idea ];
    case 'DELETE_IDEA':
      const newState = state.filter((idea) => idea.id !== action.id);
      return newState;
    default:
      return state;
  }
}
