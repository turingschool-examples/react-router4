import * as actions from './actions.js';

describe('actions', () => {

  it('addIdea returns an object with an idea and type', () => {
    const idea = { title: 'tim', body: 'is cool', id: 1 };
    const action = actions.addIdea(idea);

    const returnedObj = {
      type: 'ADD_IDEA',
      idea
    };

    expect(action).toEqual(returnedObj);
  });

  it('deleteIdea returns an object with an id and type', () => {
    const id = 1;
    const action = actions.deleteIdea(id);

    const returnedObj = {
      type: 'DELETE_IDEA',
      id
    };

    expect(action).toEqual(returnedObj);
  });

});
