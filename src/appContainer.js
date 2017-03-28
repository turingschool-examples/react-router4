import App from './App.js';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, null)(App);
