import ListItem from './listItem';
import { connect } from 'react-redux';
import * as actions from './actions.js';

const mapStateToProps = (state) => {
  return { items: state.thoughts }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (id) => {
      dispatch(actions.deleteThought(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
