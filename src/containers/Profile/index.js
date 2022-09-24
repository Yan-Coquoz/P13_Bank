/* eslint-disable no-unused-vars */
import { connect } from "react-redux";
import Profile from "components/pages/Profile";

const mapStateToProps = (state) => ({
  userId: state.user.id,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
