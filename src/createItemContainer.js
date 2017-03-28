import { connect } from 'react-redux';
import * as actions from './actions.js';
import CreateItem from './createItem.js';

const mapDispatchToProps = (dispatch) => {
  return {
    addIdea: (idea) => {
      dispatch(actions.addIdea(idea));
    }
  }
};

export default connect(null, mapDispatchToProps)(CreateItem);
