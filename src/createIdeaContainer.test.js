import React from 'react';
import { mount  } from 'enzyme'; // testing container components requires a full mount, not a shallow
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

// import both the container and the component we want to wrap
import CreateIdeaContainer from './createIdeaContainer';
import CreateItem from './createItem';

// We technically don't *need* configureMockStore, because we're not
// applying any middleware (e.g. redux-thunk) in this example. We could
// mock out a simpler one ourselves, but using it doesn't do any harm
// and it gives us a lot of testing features for free.
const mockStore = configureMockStore()({
  ideas: ['foo', 'bar', 'baz']
});


const setup = () => {
  // Mount our container component *within* a Provider that has our new mockStore as a prop
  const Container = mount(<Provider store={mockStore}><CreateIdeaContainer /></Provider>);

  // Find the component we're wrapping so we can check its props later
  const Component = Container.find(CreateItem);

  return {
    Container,
    Component
  }
}


describe('CreateIdeaContainer', () => {
  // Grab our container and component from the setup method we wrote
  const { Container, Component } = setup();

  // Verify the container correctly bound our action creators as props
  it('should pass down the correct action creators', () => {
    expect(Object.keys(Component.props())).toContain('addIdea');
  });
});