import React, { Component } from 'react';
import './App.css';
import CreateItem from './createItem.js';
import { NavBar }from './navBar.js';
import { Home }from './home.js';
import { ListItem }from './listItem.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: [{title: 'cool', body: 'yay', id: Date.now()}, {title: 'asld;kfj', body: 'yay', id: Date.now()+1}]
    };
  }

submitIdea(idea) {
  const { ideas } = this.state;
  ideas[ideas.length] = { ...idea, id: Date.now() }
  this.setState({ ideas: ideas});
}

  render() {
    const { ideas } = this.state;

    return (
      <div className='App'>
        <div className='App-header'>
          <div className='App-title'>Idea & Thought Box</div>
          <NavBar />
        </div>
        <CreateItem submitForm={this.submitIdea.bind(this)}/>

        <div className='list'>
          {ideas.map((idea) => <ListItem key={idea.id} {...idea}/>)}
        </div>
      </div>
    );
  }
}

export default App;
