import { CHANGE_FIELD } from "../actions/user";

const initialState = {
  username: "",
  password: "",
  isLogged: false,
  toRemember: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      // console.log(action);
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
  }
};
export default reducer;
