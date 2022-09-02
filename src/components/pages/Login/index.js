import React from "react";
// import PropTypes from "prop-types";
import Input from "../../Input";
import Checkbox from "../../checkbox";
import Button from "../../Button";
import user from "../../../assets/user_bank.svg";
import "./style.scss";

const Login = () => {
  return (
    <div className="main bg-dark">
      <section className="sign-in-content">
        <img src={user} alt="user icon" className="user_icon sign-in-icon" />
        <h1>Sign In</h1>
        <form>
          <Input type="text" label="username" />
          <Input type="password" label="password" />
          <Checkbox />
          <Button nameClass="button" title="Sign In" />
        </form>
      </section>
    </div>
  );
};

//  Login.propTypes = {};
export default Login;
