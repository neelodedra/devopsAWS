import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    let validateEmail = emailValidation(e.target.value);
    setIsEmailValid(validateEmail);
  };

  const emailValidation = (email) => {
    const regex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
    return !(!email || regex.test(email) === false);
  };

  const handleClick = () => {
    console.log("First name:", firstName);
    console.log("Last name:", lastName);
    console.log("Email:", email);

    if (email === "" || lastName === "" || firstName === "") {
      setError("All fields are mandatory");
    } else {
      setSuccess("Login successful");
      setError("");
    }
  };

  return (
    <>
      <div className="mt-3 container row">
        <form>
          <div className="container col-4">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => handleChangeFirstName(e)}
              className="form-control"
            />
          </div>

          <div className="container col-4">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => handleChangeLastName(e)}
              className="form-control"
            />
          </div>

          <div className="container col-4">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => handleChangeEmail(e)}
              className="form-control"
            />
            {!isEmailValid && (
              <span className="text-warning">
                Please enter a valid email address
              </span>
            )}
          </div>

          <div className="container mt-1 col-4">
            {success ? <div className="text-success">{success}</div> : null}
            {error ? <div className="text-danger">{error}</div> : null}
          </div>

          <div className="container col-4 mt-3">
            <button
              type="button"
              onClick={() => handleClick()}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default App;
