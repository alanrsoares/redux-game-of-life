import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Grid from '../components/Grid';
import * as GridActions from '../actions/grid';

function mapStateToProps(state) {
  return {
    data: state.data
  };
}

const mapDispatchToProps = (dispatch) => bindActionCreators(GridActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
