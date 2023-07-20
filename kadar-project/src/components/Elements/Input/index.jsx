import React from "react";

export default function Input(props) {
  const { type, id, placeholder, style } = props;
  return (
    <>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        className={`border-2 border-black px-3 py-2 rounded-md text-black ${style}`}
        required
      />
    </>
  );
}
