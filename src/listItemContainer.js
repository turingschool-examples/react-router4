import { connect } from 'react-redux';
import * as actions from './actions.js';
import { ListItem } from './listItem.js';

const mapStateToProps = (state) => {
 return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteIdea: (id) => {
      dispatch(actions.deleteIdea(id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
