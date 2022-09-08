// @ts-nocheck
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Input from "../../../containers/Input";
import Checkbox from "../../Checkbox";
import Button from "../../Button";
import user from "../../../assets/user_bank.svg";
import { checkEmail } from "../../../Utils";
import "./style.scss";

// TODO faire la réponse d'API en cas d'erreur

const Login = ({
  changeField,
  sendLoginForm,
  isLogged,
  email,
  id,
  password,
  checked,
  errorStatus,
  errorMSG,
  status,
  getUserCredentials,
}) => {
  const [log, setLog] = useState(isLogged);
  const [errStatus, setErrStatus] = useState(errorStatus);

  const navigate = useNavigate();

  const handleSendForm = (evt) => {
    evt.preventDefault();
    const email = evt.target[0].value.toLowerCase();
    const password = evt.target[1].value;
    const remember = evt.target[2].checked;

    if (checkEmail(email)) {
      sendLoginForm({ email, password, remember });
    }
  };

  // redirection
  useEffect(() => {
    if (status === 200) getUserCredentials();
    setLog(isLogged);
    if (log && id.length > 0) {
      navigate(`/user/${id}`, { replace: true });
    }
  }, [isLogged, log, status]);

  useEffect(() => {
    setErrStatus(errorStatus);
    const span = document.querySelector(".error_login");
    if (typeof errStatus === "number") {
      span.classList.add("active");
      let timer;
      // FIXME faire un message d'erreur a chaque mauvaise tentative de connection
      timer = setTimeout(() => {
        span.classList.remove("active");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [errorStatus, errStatus, errorMSG]);

  return (
    <div className="main bg-dark">
      <section className="sign-in-content">
        <img src={user} alt="user icon" className="user_icon sign-in-icon" />
        <h1>Sign In</h1>
        <form onSubmit={handleSendForm}>
          <Input
            type="email"
            label="username"
            onChange={changeField}
            name={"email"}
            value={email}
            placeholder="votre email"
          />
          <Input
            type="password"
            label="password"
            onChange={changeField}
            name="password"
            value={password}
            placeholder="mot de passe"
          />
          <Checkbox
            name={"toRemember"}
            onChange={changeField}
            value={checked}
          />
          {((<br />), (<span className="error_login">{errorMSG} </span>))}
          <Button nameClass="button" title="Sign In" type="submit" />
        </form>
      </section>
    </div>
  );
};

Login.propTypes = {
  changeField: PropTypes.func,
  sendLoginForm: PropTypes.func,
  isLogged: PropTypes.bool,
  id: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  errorStatus: PropTypes.number,
  errorMSG: PropTypes.string,
  checked: PropTypes.bool,
  status: PropTypes.number,
  getUserCredentials: PropTypes.func,
};
Login.defaultProps = {
  status: null,
};
export default Login;
