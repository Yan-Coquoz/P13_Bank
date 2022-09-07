/* eslint-disable no-unused-vars */
import { connect } from "react-redux";
import Header from "../../components/Header";
import { disconnect } from "../../actions/user";

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  username: state.user.username,
  id: state.user.id,
});

const mapDispatchToProps = (dispatch) => ({
  disconnect: () => {
    const action = disconnect();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
