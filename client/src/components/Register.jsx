import React, { useState } from "react";

export const Register = (props) => {
  const [emailReg, setEmailReg] = useState("");
  const [passReg, setPassReg] = useState("");
  const [nameReg, setNameReg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="">Nome Completo</label>
        <input
          value={name}
          onChange={(e) => setNameReg(e.target.value)}
          name="name"
          id="name"
          placeholder="Seu Nome"
        />
        <label htmlFor="email">E-mail</label>
        <input
          value={email}
          onChange={(e) => setEmailReg(e.target.value)}
          type="email"
          placeholder="seuemail@email.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Senha</label>
        <input
          value={pass}
          onChange={(e) => setPassReg(e.target.value)}
          type="password"
          placeholder="Senha"
          id="password"
          name="password"
        />
        <button type="submit">Register</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Já possui uma conta? Login
      </button>
    </div>
  );
};
