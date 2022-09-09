/* eslint-disable no-unused-vars */
import { connect } from "react-redux";
import { changeField } from "../../actions/user";
import Checkbox from "../../components/Checkbox";

const mapStateToProps = (state) => ({
  checked: state.user.toRemember,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (key, value) => {
    const action = changeField(key, value);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkbox);
