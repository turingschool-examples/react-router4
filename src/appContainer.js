import { connect } from 'react-redux';
import * as actions from './actions.js';
import App from './App.js';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    addIdea: (idea) => {
      dispatch(actions.addIdea(idea));
    }
  }
};

export default connect(mapStateToProps, null)(App);
