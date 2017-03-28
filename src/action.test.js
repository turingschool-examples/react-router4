import * as actions from './actions.js';

describe('Actions', () => {
  it('addItem returns a type and idea', () => {
    const idea = { title: 'woot', body: 'shit', id: 1 };
    const action = actions.addIdea(idea);
    
    expect(action.idea).toEqual(idea);
    expect(action.type).toBe('ADD_IDEA');
  });
})
