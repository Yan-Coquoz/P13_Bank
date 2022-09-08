/* eslint-disable no-unused-vars */
import { connect } from "react-redux";
import Welcome from "../../components/Welcome";

const mapStateToProps = (state) => ({
  firstName: state.user.firstName,
  lastName: state.user.lastName,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
