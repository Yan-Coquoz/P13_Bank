export const CHANGE_FIELD = "CHANGE_FIELD";

export const changeField = (key, value) => ({
  type: CHANGE_FIELD,
  key,
  value,
});
