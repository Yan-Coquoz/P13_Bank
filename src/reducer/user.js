// @ts-nocheck
import {
  CHANGE_FIELD,
  USER_CREDENTIAL,
  GET_ERROR_MESSAGE,
  SET_LOGIN_DATAS,
  DISCONNECT,
  ONLY_DISCONNECT,
} from "../actions/user";

const initialState = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  isLogged: false,
  toRemember: false,
  id: "",
  errorMSG: "",
  errorStatus: null,
  status: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.key]: action.value,
      };

    case SET_LOGIN_DATAS: {
      const { email, remember } = { ...action.payload };
      return {
        ...state,
        email,
        toRemember: remember,
        password: "",
        errorMSG: "",
        errorStatus: null,
        status: action.response.status,
      };
    }

    case USER_CREDENTIAL: {
      const { firstName, id, lastName, email } = { ...action.payload.body };
      // console.log(action.payload);
      return {
        ...state,
        isLogged: action.payload.status === 200 ? true : false,
        username: action.payload.body.firstName,
        firstName,
        id,
        lastName,
        email,
        errorMSG: "",
        errorStatus: null,
      };
    }
    case GET_ERROR_MESSAGE: {
      const { message, status } = { ...action.payload };
      return {
        ...state,
        errorMSG: message,
        errorStatus: status,
        isLogged: false,
        id: "",
      };
    }
    case DISCONNECT: {
      console.log("disco");
      return {
        ...state,
        isLogged: false,
      };
    }

    case ONLY_DISCONNECT: {
      console.log("only");
      return {
        ...state,
        id: "",
        email: "",
        firstName: "",
        username: "",
        lastName: "",
        status: null,
        isLogged: false,
        toRemember: false,
      };
    }
    default:
      return state;
  }
};
export default reducer;
