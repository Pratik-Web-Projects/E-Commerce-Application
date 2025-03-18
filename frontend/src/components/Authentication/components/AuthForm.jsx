import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "../../../context/DarkModeContext";
import AuthInputField from "../components/AuthInputField";
import AuthHeader from "../components/AuthHeader";
import AuthFooter from "../components/AuthFooter";
import AuthButton from "../components/AuthButton";

const AuthForm = ({ title, buttonText, footerText, footerLinkText, footerLinkTo, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const { darkMode } = useDarkMode();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 rounded-xl">
        <AuthHeader title={title} />
        <div className={`rounded-lg p-8 shadow-md ${darkMode ? "bg-gray-800" : "bg-gray-100"} border-2 border-gray-800  dark:border-2`}>
          <form onSubmit={onSubmit}>
            <AuthInputField
              label="Enter your email"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />

            <AuthInputField
              label="Enter your password"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              visible={visible}
              setVisible={setVisible}
            />

            {title === "Log in" && (
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <label className="text-sm">Remember me</label>
                </div>
                <div className="text-sm">
                  <Link to="/forget-password" className="text-blue-500 hover:text-blue-600">Forgot your password?</Link>
                </div>
              </div>
            )}

            <AuthButton type="submit" text={buttonText} className="bg-blue-600 hover:bg-blue-700" />
            <AuthFooter text={footerText} linkText={footerLinkText} linkTo={footerLinkTo} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
