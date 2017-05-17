import { connect } from 'react-redux';
import App from './App.js';

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreator(action.addIdea, dispatch)
    // deleteItem: (id) => {
    //   dispatch({ type: 'DELETE_IDEA', id: id })
    // }

  // }
}

export default connect(mapStateToProps, null)(App);
