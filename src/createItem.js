import React, { Component } from 'react';

export default class CreateItem extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: ''
    }
  }

  handleChange(e, title) {
    this.setState({ [title]: e.target.value });
  }

  handleSubmit() {
    this.props.submitForm(this.state);
    this.setState({ title: '', body: '' });
  }

  render() {
    return(
      <div className='create-ideas'>
        Title:
        <input value={this.state.title} onChange={(e) => this.handleChange(e, 'title')} />

        Body:
        <textarea type='text-area' value={this.state.body} onChange={(e) => this.handleChange(e, 'body')} />
        <button onClick={this.handleSubmit.bind(this)}>Submit</button>
      </div>
    );
  }

}
