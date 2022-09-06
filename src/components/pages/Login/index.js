// @ts-nocheck
import React from "react";
import PropTypes from "prop-types";
import Input from "../../../containers/Input";
import Checkbox from "../../checkbox";
import Button from "../../Button";
import user from "../../../assets/user_bank.svg";
import "./style.scss";

const Login = ({ changeField, sendLoginForm }) => {
  const handleSendForm = (evt) => {
    evt.preventDefault();
    const email = evt.target[0].value;
    const password = evt.target[1].value;
    sendLoginForm({ email: email, password: password });
  };
  return (
    <div className="main bg-dark">
      <section className="sign-in-content">
        <img src={user} alt="user icon" className="user_icon sign-in-icon" />
        <h1>Sign In</h1>
        <form onSubmit={handleSendForm}>
          <Input
            type="text"
            label="username"
            onChange={changeField}
            name={"email"}
          />
          <Input
            type="password"
            label="password"
            onChange={changeField}
            name="password"
          />
          <Checkbox />
          <Button nameClass="button" title="Sign In" type="submit" />
        </form>
      </section>
    </div>
  );
};

Login.propTypes = {
  changeField: PropTypes.func,
  sendLoginForm: PropTypes.func,
};
export default Login;
