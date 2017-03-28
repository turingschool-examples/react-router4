import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import CreateItem from './createItem.js';
import { NavBar }from './navBar.js';
import { Home }from './home.js';
import { ListItem } from './listItem.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: []
    };
  }

  submitIdea(idea) {
    const { ideas } = this.state;
    ideas.push(Object.assign(idea, {id: Date.now()}))
    this.setState({ideas: ideas});
  }


  render() {
    const { ideas } = this.state
    return (
      <div className='App'>
        <div className='App-header'>
          <div className='App-title'>Idea & Thought Box</div>
          <NavBar />
        </div>

        <Route exact path='/' component={Home} />

        <Route exact path='/create-idea' render={({ match }) =>
          <CreateItem submitForm={this.submitIdea.bind(this)}/>
        } />

        <Route exact path='/ideas' render={({ match }) =>
          <div className='list'>
            {ideas.map((idea) => <ListItem key={idea.id} {...idea} />)}
          </div>
        } />

        <Route path='/ideas/:id' render={({ match }) => {
          const idea = ideas.find((idea) => idea.id === parseInt(match.params.id, 10));
          if (idea) {
            return <ListItem {...idea} />;
          }
          return (<div className='list-item'>That Idea could not be found </div>)
        }} />

      </div>
    );
  }
}

export default App;
