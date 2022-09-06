/* eslint-disable no-unused-vars */
import { connect } from "react-redux";
import Login from "../../components/pages/Login";
import { sendLoginForm } from "../../actions/user";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  sendLoginForm: (payload) => {
    const action = sendLoginForm(payload);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
