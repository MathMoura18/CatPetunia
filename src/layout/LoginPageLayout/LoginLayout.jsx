import React, { useState } from "react";
import "./LoginLayout.css";
import { Login } from "../../components/Login";
import { Register } from "../../components/Register";

function LoginLayout() {
  const [currentForm, setCurrentForm] = useState("login");

  return (
    <>
      {currentForm === "login" ? <Login /> : <Register />}
    </>
  );
}

export default LoginLayout;
