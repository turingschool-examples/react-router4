import React, { Component } from 'react';

export default class CreateIdea extends Component {

  render() {
    console.log(this.props.match)
    return(
      <div>
        {this.props.title}
      </div>
    );
  }

}
