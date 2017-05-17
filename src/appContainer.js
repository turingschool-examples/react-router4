import { connect } from 'react-redux';
import App from './App.js';
import * as actions from './actions';

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteIdea: (id) => {
      dispatch(actions.deleteIdea(id))
    },
    deleteThought: (id) => {
      dispatch(actions.deleteThought(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
