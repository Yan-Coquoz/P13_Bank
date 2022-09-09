import { connect } from "react-redux";
import Login from "../../components/pages/Login";
import {
  sendLoginForm,
  getUserCredentials,
  cleanMessage,
} from "../../actions/user";

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  email: state.user.email,
  password: state.user.password,
  id: state.user.id,
  errorStatus: state.user.errorStatus,
  errorMSG: state.user.errorMSG,
  remember: state.user.toRemember,
  status: state.user.status,
});

const mapDispatchToProps = (dispatch) => ({
  sendLoginForm: (payload) => {
    const action = sendLoginForm(payload);
    dispatch(action);
  },
  getUserCredentials: () => {
    const action = getUserCredentials();
    dispatch(action);
  },
  cleanMessage: () => {
    const action = cleanMessage();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
