import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import CreateIdeaContainer from './createIdeaContainer.js';
import CreateThoughtContainer from './createThoughtContainer.js';
import { NavBar }from './navBar.js';
import { Home } from './home.js';
import IdeaList from './listIdeaContainer.js';
import ThoughtList from './listThoughtContainer.js';
import { Item } from './item.js';

class App extends Component {

  render() {
    const { ideas, thoughts, deleteIdea, deleteThought } = this.props
    return (
      <div className='App'>
        <div className='App-header'>
          <div className='App-title'>Idea & Thought Box</div>
          <NavBar />
        </div>

        <Route exact path='/' component={Home} />

        <Route exact path='/create-idea' render={({ match }) =>
          <CreateIdeaContainer />
        } />

        <Route exact path='/create-thought' render={({ match }) =>
          <CreateThoughtContainer />
        } />

        <Route exact path='/ideas' component={IdeaList} />

        <Route exact path='/thoughts' component={ThoughtList} />

        <Route path='/ideas/:id' render={({ match }) => {
          const idea = ideas.find((idea) => idea.id === parseInt(match.params.id, 10));
          if (idea) {
            return <Item {...idea} deleteItem={deleteIdea}/>;
          }
          return (<div className='list-item'>That Idea could not be found </div>)
        }} />

        <Route path='/thoughts/:id' render={({ match }) => {
          const thought = thoughts.find((thought) => thought.id === parseInt(match.params.id, 10));
          if (thought) {
            return <Item {...thought} deleteItem={deleteThought}/>;
          }
          return (<div className='list-item'>That Idea could not be found </div>)
        }} />

      </div>
    );
  }
}

export default App;
