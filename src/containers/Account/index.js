/* eslint-disable no-unused-vars */
import { connect } from "react-redux";
import Account from "../../components/Account";

const mapStateToProps = (state) => ({
  id: state.user.id,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
