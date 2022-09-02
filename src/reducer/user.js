import {} from "../actions/user";

const initialState = {
  username: "",
  password: "",
  isLogged: false,
  toRemember: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 1:
    default:
      return state;
  }
};
export default reducer;
