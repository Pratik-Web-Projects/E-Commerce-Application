import React from "react";
import AuthForm from "../components/AuthForm";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in...");
  };

  return (
    <AuthForm
      title="Log in"
      buttonText="Log in"
      footerText="Don't have an account?"
      footerLinkText="Register"
      footerLinkTo="/register"
      onSubmit={handleSubmit}
    />
  );
};

export default Login;
