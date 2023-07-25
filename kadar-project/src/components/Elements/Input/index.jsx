import React from "react";

export default function Input(props) {
  const { type, value, placeholder, onChange} = props;
  return (
    <>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className={`border-2 border-black px-3 py-2 rounded-md text-black w-full`}
        onChange={onChange}
        required
      />
    </>
  );
}
