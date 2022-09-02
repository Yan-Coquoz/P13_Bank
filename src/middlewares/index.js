/* eslint-disable no-unused-vars */
import api from "../API";

const user = (store) => (next) => (action) => {
  switch (action.type) {
    default:
      next(action);
  }
};

export default user;
