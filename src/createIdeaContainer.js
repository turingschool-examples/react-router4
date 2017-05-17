import { connect } from 'react-redux';
import CreateItem from './createItem.js';
import * as actions from './actions.js';

const mapDispatchToProps = (dispatch) => {
  return {
    addIdea: (idea) => {
      dispatch(actions.addIdea(idea))
    }
  }
}

export default connect(null, mapDispatchToProps)(CreateItem);
