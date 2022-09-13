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
  switch (action.type) {
    case SEND_LOGIN_FORM: {
      localStorage.clear();
      try {
        const logUser = await Api.post("/user/login", {
          email: action.payload.email,
          password: action.payload.password,
        })
          .then((rep) => {
            // le token est placé dans le localStorage
            localStorage.setItem("token", rep.data.body.token);
            return rep.data;
          })
          .catch((erreur) => {
            const error_msg = getErrorMessage(erreur.response.data);
            store.dispatch(error_msg);
          });
        if (logUser.status === 200) {
          const response = setLoginDatas(action.payload, logUser);
          store.dispatch(response);
        }
      } catch (error) {
        return error;
      }
      break;
    }
    case GET_USER_CREDENTIALS: {
      const token = localStorage.getItem("token");
      try {
        const headers = { Authorization: `Bearer ${token}` };
        const getCredentials = await Api.post(
          "/user/profile",
          {},
          { headers },
        ).then((res) => res.data);

        const response = userCredential(getCredentials);
        store.dispatch(response);
      } catch (error) {
        getErrorMessage(error.response.data);
      }
      break;
    }
    case NEW_IDENTITY:
      {
        const { email, firstName, lastName } = store.getState().user;
        const token = localStorage.getItem("token");
        const headers = { Authorization: `Bearer ${token}` };
        try {
          const datas = await Api.put(
            "/user/profile",
            {
              email,
              lastName,
              firstName,
            },
            { headers },
          ).then((res) => res.data);

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
