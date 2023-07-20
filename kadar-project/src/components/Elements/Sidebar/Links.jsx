import React from "react";
import { Link } from "react-router-dom";

export default function Links(props) {
  const { children, To } = props;
  return (
    <div className="flex flex-col">
      <Link
        to={`${To}`}
        className="text-xl p-3 m-2 hover:translate-x-2 hover:bg-orange-600/90 hover:rounded-md transition-transform duration-300"
      >
        {children}
      </Link>
    </div>
  );
}
