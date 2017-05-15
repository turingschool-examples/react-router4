import React, { Component } from 'react';
import './App.css';
import CreateItem from './createItem.js';
import { NavBar }from './navBar.js';
import { Home }from './home.js';
import { ListItem }from './listItem.js';
import { Route, Link, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: [{title: 'cool', body: 'yay', id: Date.now()}, {title: 'asld;kfj', body: 'yay', id: Date.now()+1}],
      thoughts: [{title: 'cool', body: 'yay', id: Date.now()}, {title: 'asld;kfj', body: 'yay', id: Date.now()+1}]
    };
  }

submitIdea(idea) {
  const { ideas } = this.state;
  ideas[ideas.length] = { ...idea, id: Date.now() }
  this.setState({ ideas: ideas});
}

submitThoughts(thought) {
  const { thoughts } = this.state;
  thoughts[thoughts.length] = { ...thoughts, id: Date.now() }
  this.setState({ thoughts: thoughts});
}

  render() {
    const { ideas } = this.state;

    return (
      <div className='App'>
        <div className='App-header'>
          <div className='App-title'>Idea & Thought Box</div>
          <NavBar />
        </div>

        <Switch>
          <Route path='/create-idea' render={({location, history, match }) => {
            return (
              <CreateItem history={history} submitForm={this.submitIdea.bind(this)} />
            )
          }} />

          <Route path='/ideas/:idea_id' render={({ match }) => {
            const idea = ideas.find((idea) => idea.id === parseInt(match.params.idea_id, 10))
            return (<ListItem { ...idea }/>)
          }}/>

          <Route path='/ideas' render={()=>{
            return(
              <div className='list'>
                {ideas.map((idea) => <ListItem key={idea.id} {...idea}/>)}
              </div>
            )
          }}/>

          <Route path='/' component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
