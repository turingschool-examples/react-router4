import { connect } from 'react-redux';
import App from './App.js';

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, null)(App);
