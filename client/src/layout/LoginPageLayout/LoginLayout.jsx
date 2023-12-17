import { useState } from "react";
import "./LoginLayout.css";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";

function LoginLayout() {
  const handleLogin = (values) => {
    Axios.post("http://localhost:3001/login", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg);
    });
  };

  const handleRegister = (values) => {
    Axios.post("http://localhost:3001/register", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg);
      console.log(response);
    });
  };

  const validationsLogin = yup.object().shape({
    email: yup
      .string()
      .email("email inválido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("A senha é obrigatória"),
  });

  const validationsRegister = yup.object().shape({
    email: yup
      .string()
      .email("email inválido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("A senha é obrigatória"),
    confirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas são diferentes")
      .required("A confirmação da senha é obrigatória"),
  });

  return (
    <div className="container">
      <div className="input-container">
        <div className="input-card">
          <h1>Login</h1>
          <Formik
            initialValues={{}}
            onSubmit={handleLogin}
            validationSchema={validationsLogin}
          >
            <Form className="login-form">
              <div className="login-form-group">
                <Field
                  name="email"
                  className="form-field"
                  placeholder="Email"
                />

                <ErrorMessage
                  component="span"
                  name="email"
                  className="form-error"
                />
              </div>
              {/*Outro campo*/}
              <div className="form-group">
                <Field
                  name="password"
                  className="form-field"
                  placeholder="Senha"
                />

                <ErrorMessage
                  component="span"
                  name="password"
                  className="form-error"
                />
              </div>

              <button className="button-link" id="button" type="submit">
                Login
              </button>
            </Form>
          </Formik>
        </div>
        {/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
        <div className="input-card">
          <h1>Cadastro</h1>
          <Formik
            initialValues={{}}
            onSubmit={handleRegister}
            validationSchema={validationsRegister}
          >
            <Form className="register-form">
              <div className="register-form-group">
                <Field
                  name="email"
                  className="form-field"
                  placeholder="Email"
                />

                <ErrorMessage
                  component="span"
                  name="email"
                  className="form-error"
                />
              </div>

              <div className="form-group">
                <Field
                  name="password"
                  className="form-field"
                  placeholder="Senha"
                />

                <ErrorMessage
                  component="span"
                  name="password"
                  className="form-error"
                />
              </div>

              <div className="form-group">
                <Field
                  name="confirmation"
                  className="form-field"
                  placeholder="Senha"
                />

                <ErrorMessage
                  component="span"
                  name="confirmation"
                  className="form-error"
                />
              </div>

              <button className="button-link" id="button" type="submit">
                Cadastrar
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default LoginLayout;
