import React from "react";
import AuthForm from "../components/AuthForm";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registering...");
  };

  return (
    <AuthForm
      title="Register"
      buttonText="Register"
      footerText="Already have an account?"
      footerLinkText="Login"
      footerLinkTo="/login"
      onSubmit={handleSubmit}
    />
  );
};

export default Register;
