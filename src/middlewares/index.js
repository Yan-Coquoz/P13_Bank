import Api from "../API";
import {
  SEND_LOGIN_FORM,
  GET_USER_CREDENTIALS,
  NEW_IDENTITY,
  userCredential,
  getErrorMessage,
  setLoginDatas,
  upDateIdentity,
} from "../actions/user";

const user = (store) => (next) => async (action) => {
  const { email } = store.getState().user;

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
        const response = userCredential(getCredentials);
        store.dispatch(response);
      } catch (error) {
        getErrorMessage(error.response.data);
      }
      break;
    }
    case NEW_IDENTITY:
      {
        try {
          const datas = await Api.put("/user/profile", {
            email,
            lastName: action.payload.lName,
            firstName: action.payload.fName,
          }).then((res) => res.data);

          const response = upDateIdentity(datas);
          store.dispatch(response);
        } catch (error) {
          getErrorMessage(error.response.data);
        }
      }
      break;

    default:
      next(action);
  }
};

export default user;
