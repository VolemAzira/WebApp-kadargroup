import React from "react";

const Button = (props) => {
  const { children, type, style } = props;
  return (
    <div>
      <button
        type={type}
        className={`bg-orange-500 text-white font-bold py-2 px-8 rounded-md hover:bg-white transition-all hover:text-orange-500 duration-300 ease-in-out" ${style}`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
