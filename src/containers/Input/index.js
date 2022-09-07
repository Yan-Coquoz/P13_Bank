// @ts-nocheck
import { connect } from "react-redux";
import { changeField } from "../../actions/user";
import Input from "../../components/Input";

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (key, value) => {
    const action = changeField(key, value);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);
