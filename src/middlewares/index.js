import Api from "../API";
import {
  SEND_LOGIN_FORM,
  GET_USER_CREDENTIALS,
  userCredential,
  getErrorMessage,
  setLoginDatas,
} from "../actions/user";

const user = (store) => (next) => async (action) => {
  switch (action.type) {
    case SEND_LOGIN_FORM: {
      localStorage.removeItem("token");
      try {
        const logUser = await Api.post("/user/login", {
          email: action.payload.email,
          password: action.payload.password,
        })
          .then((rep) => {
            return rep.data;
          })
          .catch((erreur) => {
            const error_msg = getErrorMessage(erreur.response.data);
            store.dispatch(error_msg);
          });
        if (logUser.status === 200) {
          localStorage.setItem("token", logUser.body.token);
          const logUserdatas = setLoginDatas(action.payload, logUser);
          store.dispatch(logUserdatas);
        }
      } catch (error) {
        return error;
      }
      break;
    }
    case GET_USER_CREDENTIALS: {
      try {
        const getCredentials = await Api.post("/user/profile").then(
          (res) => res.data,
        );
        const userDatas = userCredential(getCredentials);
        store.dispatch(userDatas);
      } catch (error) {
        getErrorMessage(error.response.data);
      }
      break;
    }

    default:
      next(action);
  }
};

export default user;
