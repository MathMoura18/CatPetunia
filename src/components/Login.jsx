import React from "react";
import { useState } from "react";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email)
  }

  const register = () => {
    Axios.post("http://localhost3001/login", {
      email: email,
      password: pass
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="auth-form-container">
    <form className="login-form" onSubmit={handleSubmit} method="POST">
      <label htmlFor="email">E-mail</label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="seuemail@email.com"
        id="email"
        name="email"
      />
      <label htmlFor="password">Senha</label>
      <input
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        type="password"
        placeholder="Senha"
        id="password"
        name="password"
      />
      <button type="submit">Log In</button>
    </form>
    <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Ainda não tem uma conta? Registre aqui</button>
    </div>
  );
};
