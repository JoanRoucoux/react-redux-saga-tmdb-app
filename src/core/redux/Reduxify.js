import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const Reduxify = (mapStateToProps, actions, ...args) => {
  const provideDispatch = (dispatch) => bindActionCreators(actions, dispatch);
  const matchDispatchToProps = !actions ? actions : provideDispatch;
  return connect(mapStateToProps, matchDispatchToProps, ...args);
};

export default Reduxify;
