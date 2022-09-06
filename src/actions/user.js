export const CHANGE_FIELD = "CHANGE_FIELD";
export const SEND_LOGIN_FORM = "SEND_LOGIN_FORM";

export const changeField = (key, value) => ({
  type: CHANGE_FIELD,
  key,
  value,
});

export const sendLoginForm = (payload) => ({
  type: SEND_LOGIN_FORM,
  payload,
});
