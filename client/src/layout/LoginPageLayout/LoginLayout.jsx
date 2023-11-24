import React, { useState } from "react";
import "./LoginLayout.css";
import { Login } from "../../components/Login";
import { Register } from "../../components/Register";

function LoginLayout() {
  const [currentForm, setCurrentForm] = useState("login");

  const toogleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="login-page">
      {currentForm === "login" ? <Login onFormSwitch={toogleForm} /> : <Register onFormSwitch={toogleForm}/>}
    </div>
  );
}

export default LoginLayout;
