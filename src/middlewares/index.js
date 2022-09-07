import Api from "../API";
import {
  SEND_LOGIN_FORM,
  userCedential,
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
          const logUserdatas = setLoginDatas(action.payload);

          store.dispatch(logUserdatas);
          // voir SI on peut placé ce try/catch dans un case

          try {
            const getCredentials = await Api.post("/user/profile").then(
              (res) => res.data,
            );

            const userDatas = userCedential(getCredentials);
            store.dispatch(userDatas);
          } catch (error) {
            // console.log("** error ** ", error.response);
            getErrorMessage(error.response.data);
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
