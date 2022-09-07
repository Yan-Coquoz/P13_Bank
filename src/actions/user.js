export const CHANGE_FIELD = "CHANGE_FIELD";
export const SEND_LOGIN_FORM = "SEND_LOGIN_FORM";
export const USER_CREDENTIAL = "USER_CREDENTIAL";
export const GET_ERROR_MESSAGE = "GET_ERROR_MESSAGE";
export const SET_LOGIN_DATAS = "SET_LOGIN_DATAS";
export const HANDLE_CHECKED = "HANDLE_CHECKED";
export const DISCONNECT = "DISCONNECT";

export const changeField = (key, value) => ({
  type: CHANGE_FIELD,
  key,
  value,
});

export const sendLoginForm = (payload) => ({
  type: SEND_LOGIN_FORM,
  payload,
});

export const userCedential = (payload) => ({
  type: USER_CREDENTIAL,
  payload,
});

export const getErrorMessage = (payload) => ({
  type: GET_ERROR_MESSAGE,
  payload,
});

export const setLoginDatas = (payload) => ({
  type: SET_LOGIN_DATAS,
  payload,
});

export const handleChecked = (payload) => ({
  type: HANDLE_CHECKED,
  payload,
});
export const disconnect = () => ({
  type: DISCONNECT,
});
