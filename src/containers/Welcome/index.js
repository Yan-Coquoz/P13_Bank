/* eslint-disable no-unused-vars */
import { connect } from "react-redux";
import Welcome from "../../components/Welcome";
import { newIdentity, cleanMessage } from "../../actions/user";

const mapStateToProps = (state) => ({
  firstName: state.user.firstName,
  lastName: state.user.lastName,
  message: state.user.validationMessage,
});

const mapDispatchToProps = (dispatch) => ({
  newIdentity: (payload) => {
    const action = newIdentity(payload);
    dispatch(action);
  },
  cleanMessage: () => {
    const action = cleanMessage();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
