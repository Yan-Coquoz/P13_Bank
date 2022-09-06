// @ts-nocheck
import { CHANGE_FIELD, REFRESH_DATAS } from "../actions/user";

const initialState = {
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  isLogged: false,
  toRemember: false,
  id: "",
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.key]: action.value,
      };
    case REFRESH_DATAS: {
      const { firstName, id, lastName, email } = { ...action.payload.body };

      return {
        ...state,
        isLogged: action.payload.status === 200 ? true : false,
        firstName,
        id,
        lastName,
        email,
        password: "",
      };
    }
    default:
      return state;
  }
};
export default reducer;
