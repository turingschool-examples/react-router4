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

export const addThought = (thought) => {
  return {
    type: 'ADD_THOUGHT',
    thought
  }
}

export const deleteThought = (id) => {
  return {
    type: 'DELETE_THOUGHT',
    id
  }
}
