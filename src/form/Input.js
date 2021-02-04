import React, { InputHTMLAttributes } from "react";
import IconElement from "../common/IconElement";

const Input = ({ label, iconLeft, error, touched, ...props }) => {
  const hasError = error && touched;
  const classError = hasError
    ? " border-red-600 text-red-600"
    : "text-gray-800";

  return (
    <div className="mb-2">
      {label && (
        <label className="block text-gray-700 font-bold mb-2 text-lg">
          {label}
        </label>
      )}
      <div className="flex flex-wrap w-full relative h-15 bg-white items-center rounded ">
        {iconLeft && (
          <div className={`absolute ml-2 text-indigo-300 ${classError}`}>
            <IconElement icon={iconLeft} size={24} />
          </div>
        )}
        <input
          className={`appearance-none border-2 border-gray-300 rounded w-full py-3 px-3 leading-tight focus:outline-none focus:border-indigo-900 focus:shadow-outline ${
            iconLeft && "pl-10"
          } ${classError}`}
          {...props}
        />
      </div>
      {error && <span className="text-red-600  text-sm">{error}</span>}
    </div>
  );
};

export default Input;
