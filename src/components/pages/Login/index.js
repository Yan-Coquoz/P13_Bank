// @ts-nocheck
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Input from "../../../containers/Input";
import Checkbox from "../../../containers/CheckBox";
import Button from "../../Button";
import user from "../../../assets/user_bank.svg";
import { checkEmail } from "../../../Utils";
import "./style.scss";

/**
 * C'est un composant fonctionnel qui rend un formulaire pour connecter un utilisateur
 *
 * @return  {React.ReactElement}
 */
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
  cleanErrorMessage,
}) => {
  const [log, setLog] = useState(false);
  const [errStatus, setErrStatus] = useState(null);
  const [local, setLocal] = useState(false);

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
    setLocal(!!localStorage.getItem("token"));
    setLog(isLogged);

    if (local && status === 200) {
      getUserCredentials();
      if (log && id.length > 0) {
        navigate(`/user/${id}`, { replace: true });
      }
    }
  }, [][(log, local)]);

  useEffect(() => {
    setErrStatus(errorStatus);
    const span = document.querySelector(".error_login");
    if (typeof errStatus === "number") {
      span.classList.add("active");
      let timer;

      timer = setTimeout(() => {
        span.classList.remove("active");
        cleanErrorMessage();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [][(errorStatus, errStatus, errorMSG)]);

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
            placeholder="email"
            focus={true}
          />
          <Input
            type="password"
            label="password"
            onChange={changeField}
            name="password"
            value={password}
            placeholder="password"
          />
          <Checkbox
            name={"toRemember"}
            onChange={changeField}
            // value={checked}
            checked={checked}
          />
          {((<br />), (<span className="error_login">{errorMSG} </span>))}
          <Button nameClass="button" title="Sign In" type="submit" />
        </form>
      </section>
    </div>
  );
};

Login.propTypes = {
  id: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  errorMSG: PropTypes.string,
  isLogged: PropTypes.bool,
  checked: PropTypes.bool,
  errorStatus: PropTypes.number,
  status: PropTypes.number,
  changeField: PropTypes.func,
  sendLoginForm: PropTypes.func,
  getUserCredentials: PropTypes.func,
  cleanErrorMessage: PropTypes.func,
};
Login.defaultProps = {
  status: null,
};
export default Login;
