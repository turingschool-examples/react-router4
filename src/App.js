import React, { Component } from 'react';
import './App.css';
// import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import CreateIdea from './createIdea.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: []
    };
  }
  render() {
    return (
      <div>
        Hey
      </div>
    );
  }
}

export default App;
