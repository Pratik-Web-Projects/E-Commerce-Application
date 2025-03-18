import { Link } from "react-router-dom";

const AuthFooter = ({ text, linkText, linkTo }) => {
  return (
    <div className="mt-6 text-center">
      <p className="text-sm">{text} 
        <Link to={linkTo} className="text-blue-500 hover:text-blue-600 pl-1">{linkText}</Link>
      </p>
    </div>
  );
};

export default AuthFooter;
