import { connect } from 'react-redux';
import CreateItem from './createItem.js';


const mapDispatchToProps = (dispatch) => {
  return {
    addIdea: (idea) => {
      dispatch({ type: 'ADD_IDEA', idea: idea })
    }
  }
}

export default connect(null, mapDispatchToProps)(CreateItem);
