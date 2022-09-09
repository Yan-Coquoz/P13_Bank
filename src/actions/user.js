export const CHANGE_FIELD = "CHANGE_FIELD";
export const SEND_LOGIN_FORM = "SEND_LOGIN_FORM";
export const USER_CREDENTIAL = "USER_CREDENTIAL";
export const GET_ERROR_MESSAGE = "GET_ERROR_MESSAGE";
export const SET_LOGIN_DATAS = "SET_LOGIN_DATAS";
export const HANDLE_CHECKED = "HANDLE_CHECKED";
export const DISCONNECT = "DISCONNECT";
export const ONLY_DISCONNECT = "ONLY_DISCONNECT";
export const GET_USER_CREDENTIALS = "GET_USER_CREDENTIALS";
export const CLEAN_MESSAGE = "CLEAN_MESSAGE";
export const NEW_IDENTITY = "NEW_IDENTITY";
export const UPDATE_IDENTITY = "UPDATE_IDENTITY";

export const changeField = (key, value) => ({
  type: CHANGE_FIELD,
  key,
  value,
});

export const sendLoginForm = (payload) => ({
  type: SEND_LOGIN_FORM,
  payload,
});

export const userCredential = (payload) => ({
  type: USER_CREDENTIAL,
  payload,
});

export const getUserCredentials = () => ({
  type: GET_USER_CREDENTIALS,
});

export const getErrorMessage = (payload) => ({
  type: GET_ERROR_MESSAGE,
  payload,
});

export const setLoginDatas = (payload, response) => ({
  type: SET_LOGIN_DATAS,
  payload,
  response,
});

export const handleChecked = (payload) => ({
  type: HANDLE_CHECKED,
  payload,
});

export const disconnect = (payload) => ({
  type: DISCONNECT,
  payload,
});

export const onlyDisconnect = () => ({
  type: ONLY_DISCONNECT,
});

export const cleanMessage = () => ({
  type: CLEAN_MESSAGE,
});
export const newIdentity = (payload) => ({
  type: NEW_IDENTITY,
  payload,
});

export const upDateIdentity = (payload) => ({
  type: UPDATE_IDENTITY,
  payload,
});
