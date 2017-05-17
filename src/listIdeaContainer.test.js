import React from 'react';
import { mount  } from 'enzyme'; // testing container components requires a full mount, not a shallow
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

// import both the container and the component we want to wrap
import ListIdeaContainer from './listIdeaContainer';
import ListItem from './listItem';

// We technically don't *need* configureMockStore, because we're not
// applying any middleware (e.g. redux-thunk) in this example. We could
// mock out a simpler one ourselves, but using it doesn't do any harm
// and it gives us a lot of testing features for free.
const mockStore = configureMockStore()({
  ideas: [
    { id: 1, idea: 'foo' },
    { id: 2, idea: 'bar' },
    { id: 3, idea: 'baz' }
  ]
});


const setup = () => {
  // Mount our container component *within* a Provider that has our new mockStore as a prop
  const Container = mount(<Provider store={mockStore}><ListIdeaContainer /></Provider>);

  // Find the component we're wrapping so we can check its props later
  const Component = Container.find(ListItem);

  return {
    Container,
    Component
  }
}


describe('ListIdeaContainer', () => {
  // Grab our container and component from the setup method we wrote
  const { Container, Component } = setup();

  // Verify that our initial state was passed down as props
  it('should pass the appropriate props from state', () => {
    expect(Component.props().items).toEqual([
      { id: 1, idea: 'foo' },
      { id: 2, idea: 'bar' },
      { id: 3, idea: 'baz' }
    ]);
  });

  // Verify the container correctly bound our action creators as props
  it('should pass down the correct action creators', () => {
    expect(Object.keys(Component.props())).toContain('deleteItem');
  });
});