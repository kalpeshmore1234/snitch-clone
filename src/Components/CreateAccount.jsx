import React, { useState } from "react";
import "./CreateAccount.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import InputControl from "./InputControl";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./firebase";

function CreateAccount() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    pass: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {


 
    if (
      !values.firstname ||
      !values.lastname ||
      !values.email ||
      !values.pass
    ) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    console.log(values);

    setSubmitButtonDisabled(true);

    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        console.log(user)
        await updateProfile(user, {
          displayName: `${values.firstname}   ${values.lastname}`,
          email: values.email,
        });
     
        navigate("/profile");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className="create-account">
      <div className="create-account-container">
        <div className="create-block">
          <p>CREATE ACCOUNT</p>
        </div>

        <div className="outerr-input-block">
          <div className="innerr-input-blocks">
            <div className="first-name-block blocks">
              <InputControl
                label="FIRST NAME"
                className="inputt"
                onChange={(event) =>
                  setValues((prev) => ({
                    ...prev,
                    firstname: event.target.value,
                  }))
                }
              />
            </div>

            <div className="last-name-block blocks">
              <InputControl
                label="LAST NAME"
                className="inputt"
                onChange={(event) =>
                  setValues((prev) => ({
                    ...prev,
                    lastname: event.target.value,
                  }))
                }
              />
            </div>

            <div className="emaill-block blocks">
              <InputControl
                label="EMAIL"
                className="inputt"
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, email: event.target.value }))
                }
              />
            </div>

            <div className="password-block blocks">
              <InputControl
                label="PASSWORD"
                className="inputt"
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, pass: event.target.value }))
                }
              />
            </div>

            <b className="error">{errorMsg}</b>

            <div className="create-btn-block">
              <button
                className="create-btn"
                onClick={handleSubmission}
                disabled={submitButtonDisabled}
              >
                CREATE
              </button>
            </div>

            <Link to="/login" className="register-linkk">
              <p className="createe">Login</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
