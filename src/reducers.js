export const ideas = (state=[], action) => {
  switch (action.type) {
    case 'ADD_IDEA':
      return [...state, action.idea ];
    case 'DELETE_IDEA':
      return state.filter((idea) => idea.id !== action.id);
    default:
      return state;
  }
}

export const thoughts = (state=[], action) => {
  switch (action.type) {
    case 'ADD_THOUGHT':
      return [...state, action.thought ];
    case 'DELETE_THOUGHT':
      return state.filter((thought) => thought.id !== action.id);
    default:
      return state;
  }
}
