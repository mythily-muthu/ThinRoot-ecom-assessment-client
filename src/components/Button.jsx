import React from "react";

const Button = ({
  name,
  bgColor = "bg-yellow",
  textColor = "text-white",
  click,
  width = "w-max",
  radius = "rounded-lg",
  border = "",
}) => {
  return (
    <button
      className={`h-12 px-3 py-2 ${bgColor} ${width} ${textColor} ${radius} ${border}`}
      onClick={click}
    >
      {name}
    </button>
  );
};

export default Button;
