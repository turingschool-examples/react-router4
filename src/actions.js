export const addIdea = (idea) => {
  return {
    type: 'ADD_IDEA',
    idea
  }
}

export const deleteIdea = (id) => {
  return {
    type: 'DELETE_IDEA',
    id
  }
}
