const AuthButton = ({ type, text, onClick, className }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`w-full py-3 px-4 text-white rounded-md transition duration-300 cursor-pointer ${className}`}
      >
        {text}
      </button>
    );
  };
  
  export default AuthButton;
  