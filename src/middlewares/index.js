/* eslint-disable no-unused-vars */
import Api from "../API";
import { SEND_LOGIN_FORM, refreshDatas } from "../actions/user";

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
            return rep.data;
          })
          .catch((erreur) => console.log("erreur =>", erreur));
        if (logUser.status === 200) {
          localStorage.setItem("token", logUser.body.token);

          try {
            const getCredentials = await Api.post("/user/profile").then(
              (res) => res.data,
            );
            console.log(getCredentials);
            const userDatas = refreshDatas(getCredentials);
            store.dispatch(userDatas);
          } catch (error) {
            return error;
          }
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
