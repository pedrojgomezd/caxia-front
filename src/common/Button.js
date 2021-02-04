import React from "react";
import IconElement from "./IconElement";

const colorVariant = (variant) => {
  const colors = [
    {
      type: "default",
      color: "bg-gray-200 text-gray-600",
    },
    {
      type: "transparent",
      color: "bg-transparent ",
    },
    {
      type: "primary",
      color: "bg-blue-500 text-white",
    },
  ];

  const { color } = colors.find(({ type }) => type === variant);

  return color;
};

const Button = ({ label, loading, className, variant, icon, ...props }) => {
  const color = colorVariant(variant);
  return (
    <button
      className={`flex gap-2 items-center text-base font-bold py-3 px-4 rounded-sm  ${color} ${className}`}
      disabled={loading}
      {...props}
    >
      {icon && <IconElement key="iconView" {...{ icon }} size={18} />}
      {loading && (
        <IconElement
          key="iconLoad"
          icon="Loader"
          className={`animate-spin mr-2`}
        />
      )}
      {label}
    </button>
  );
};

export default Button;
