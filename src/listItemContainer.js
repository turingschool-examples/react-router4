import { ListItem } from './listItem';
import { connect } from 'react-redux';
import * as actions from './actions.js';

const mapDispatchToProps = (dispatch) => {
  return {
    deleteIdea: (id) => {
      dispatch(actions.deleteIdea(id));
    }
  }
}

export default connect(null, mapDispatchToProps)(ListItem);
