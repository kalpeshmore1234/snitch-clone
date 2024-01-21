import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import InputControl from "./InputControl";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "./firebase"

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (
      !values.email ||
      !values.pass
    ) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    console.log(values);

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
       
        navigate("/profile");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="title-block">
          <p className="login-title">LOGIN</p>
        </div>

        <div className="outer-input-block">
          <div className="input-blocks">
            <div className="email-block block">
              <InputControl
                label="EMAIL"
                className="input"
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, email: event.target.value }))
                }
              />
            </div>

            <div className="password-block block">
              <InputControl
                label="PASSWORD"
                className="input"
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, pass: event.target.value }))
                }
              />
            </div>

            <b className="errorr">{errorMsg}</b>

            <div className="btn-block block" id="btn-block">
              <button className="btn-sign" onClick={handleSubmission} disabled={submitButtonDisabled}>
                SIGN IN
              </button>
            </div>

            <Link to="/register" className="register-link">
              <p className="create">Create account</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
