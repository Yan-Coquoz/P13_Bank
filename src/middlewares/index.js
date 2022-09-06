/* eslint-disable no-unused-vars */
import Api from "../API";
import { SEND_LOGIN_FORM } from "../actions/user";

const user = (store) => (next) => async (action) => {
  switch (action.type) {
    case SEND_LOGIN_FORM: {
      localStorage.clear();
      try {
        const logUser = await Api.post("/user/login", {
          email: action.payload.email,
          password: action.payload.password,
        })
          .then((rep) => {
            console.log(rep);
            return rep.data;
          })
          .catch((erreur) => console.log("erreur =>", erreur));
        console.log(logUser);
        if (logUser.status === 200) {
          localStorage.setItem("token", logUser.body.token);
          // passages des données dans le store
          // email, password, status => (isLogged)
        }
      } catch (error) {
        return error;
      }

      break;
    }
    default:
      next(action);
  }
};

export default user;
