export const ideas = (state = [], action) => {
  switch (action.type) {
    case 'ADD_IDEA':
      Object.assign(action.idea, { id: Date.now() });
      return [ ...state, action.idea ];
    default:
      return state;
  }
}
