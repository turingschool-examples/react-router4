import CreateItem from './createItem.js';
import * as actions from './actions.js';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  console.log('mapStateToProps')
  return state;
}

const mapDispatchToProps = (dispatch) => {
  console.log('mapDispatchToProps')
  return {
    addIdea: (idea) => {
      dispatch(actions.addIdea(idea));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateItem);
