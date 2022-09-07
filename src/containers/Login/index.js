/* eslint-disable no-unused-vars */
import { connect } from "react-redux";
import Login from "../../components/pages/Login";
import { sendLoginForm } from "../../actions/user";

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  email: state.user.email,
  password: state.user.password,
  id: state.user.id,
  errorStatus: state.user.errorStatus,
  errorMSG: state.user.errorMSG,
  remember: state.user.toRemember,
});

const mapDispatchToProps = (dispatch) => ({
  sendLoginForm: (payload) => {
    const action = sendLoginForm(payload);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
