import * as reducers from './reducers.js';

describe('idea reducer', () => {
  const initialAction = { type: 'init' }
  it('default state is an empty array', () => {

    expect(reducers.ideas(undefined, initialAction)).toEqual([]);
  });

  it('ADD_IDEA adds an idea to the initial state', () => {
    const action = { type: 'ADD_IDEA', idea: {} }

    expect(reducers.ideas(undefined, action).length).toEqual(1);
  });

  it('default state is an empty array', () => {
    const action = { type: 'DELETE_IDEA', id: 1 }

    expect(reducers.ideas(undefined, action)).toEqual([]);
  });

  it('ADD_IDEA adds an idea back of the array', () => {
    const state = [{title:2, id: 1}];
    const action = { type: 'ADD_IDEA', idea: {id:2} }

    expect(reducers.ideas(state, action).length).toEqual(2);
    expect(reducers.ideas(state, action)[1].id).toEqual(action.idea.id);
  });

  it('deletes an idea and returns an empty array', () => {
    const action = { type: 'DELETE_IDEA', id: 1 }
    const state = [{title:2, id: 1}];

    expect(reducers.ideas(state, action)).toEqual([]);
  });

  it('deletes an idea and returns an empty array', () => {
    const action = { type: 'DELETE_IDEA', id: 2 }
    const state = [{title:2, id: 1}];

    expect(reducers.ideas(state, action)).toEqual(state);
  });

  it('deletes an idea and returns an empty array', () => {
    const action = { type: 'DELETE_IDEA', id: 2 }
    const state = [{title:2, id: 1}, {title: 'second', id:2}];
    const result = [{title:2, id: 1}]

    expect(reducers.ideas(state, action)).toEqual(result);
  });

});
