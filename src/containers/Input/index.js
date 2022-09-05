// @ts-nocheck

import { connect } from "react-redux";
import { changeField } from "../../actions/user";
import Input from "../../components/Input";

const mapStateToProps = (state) => ({
  password: state.user.password,
  username: state.user.username,
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (key, value) => {
    const action = changeField(key, value);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);
