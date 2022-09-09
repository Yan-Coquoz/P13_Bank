/* eslint-disable no-unused-vars */
import { connect } from "react-redux";
import Header from "../../components/Header";
import { disconnect, onlyDisconnect } from "../../actions/user";

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  firstName: state.user.firstName,
  id: state.user.id,
  remember: state.user.toRemember,
});

const mapDispatchToProps = (dispatch) => ({
  disconnect: () => {
    const action = disconnect();
    dispatch(action);
  },
  onlyDisconnect: () => {
    const action = onlyDisconnect();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
