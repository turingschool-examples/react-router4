import React, { Component } from 'react';
import './App.css';
import { NavLink, Route, BrowserRouter as Router } from 'react-router-dom';
import CreateIdea from './createIdea.js';
import { NavBar }from './navBar.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: [{id:1, title: 'pizza'}, { id:2, title: 'cheese pizza'}]
    };
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <div className='App-header'>
            <div className='App-title'>IdeaBox</div>
            <NavBar />
          </div>
          <Route path='/create-idea' render={({ match }) =>
            <CreateIdea title='Tim is cool.'/>
          } />

          <Route exact path='/idea/:id' render={({match}) => {
            const idea = this.state.ideas.find((idea) => {
                return idea.id === parseInt(match.params.id)
            })
            return <div>{idea.title}</div>
          }} />
          <div className='App'>
            Hey
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
