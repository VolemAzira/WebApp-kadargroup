import React from "react";

const Input = (props) => {
  const { type, value, placeholder, onChange } = props;
  return (
    <div>
      <label htmlFor=""></label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className={`border-2 border-black px-3 py-2 rounded-md text-black w-full`}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default Input;
