export const ideas = (state=[], action) => {
  console.log('inside IDEAS REDUCER')
  switch (action.type) {
    case 'ADD_IDEA':
    return [...state, action.idea ];

    default:
      return state;
  }
}

export const favorites = (state=[], action) => {
  console.log('inside FAVORITES REDUCER');
  return state
}
