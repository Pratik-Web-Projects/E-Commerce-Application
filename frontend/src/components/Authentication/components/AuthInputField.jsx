import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const AuthInputField = ({
  label,
  id,
  type,
  value,
  onChange,
  placeholder,
  visible,
  setVisible,
}) => {
  return (
    <div className="mb-6">
      <label htmlFor={id} className="block text-sm font-semibold mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          type={visible && type === "password" ? "text" : type}
          id={id}
          value={value}
          onChange={onChange}
          required
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition dark:placeholder-gray-500"
          placeholder={placeholder}
        />
        {type === "password" && (
          <div
            className="absolute right-3 bottom-3 text-gray-500 cursor-pointer"
            onClick={() => setVisible(!visible)}
          >
            {visible ? (
              <AiOutlineEyeInvisible size={25} />
            ) : (
              <AiOutlineEye size={25} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthInputField;
