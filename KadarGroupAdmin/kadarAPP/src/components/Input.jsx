import React from "react";

const Input = (props) => {
  const { type, value, placeholder } = props;
  return (
    <div>
      <label htmlFor=""></label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className={`border-2 border-black px-3 py-2 rounded-md text-black w-full`}
        required
      />
    </div>
  );
};

export default Input;
