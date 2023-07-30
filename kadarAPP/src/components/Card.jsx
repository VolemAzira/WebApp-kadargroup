import React from "react";

const Card = (props) => {
  const { title, children, style } = props;
  return (
    <>
      <div className={`p-3 rounded-xl shadow-md shadow-black/20 hover:shadow-none transition ease-in-out duration-300 ${style}`}>
        <h1 className="text-center text-xl font-bold mb-3">{title}</h1>
        <div className="h-full w-full px-5 py-3">{children}</div>
      </div>
    </>
  );
};

export default Card;
