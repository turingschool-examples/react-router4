export const addIdea = (idea) => {
  console.log('INSIDE ACTIONS');
  return {
    type: 'ADD_IDEA',
    idea
  }
}

export const deleteIdea = (id) => {
  console.log('INSIDE ACTIONS');
  return {
    type: 'DELETE_IDEA',
    id: id
  }
}
