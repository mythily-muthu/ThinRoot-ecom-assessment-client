import React from "react";

const Button = ({
  name,
  bgColor = "bg-yellow",
  textColor = "text-white",
  click,
  width = "w-max",
  radius = "rounded-lg",
  border = "",
  font = "font-normal",
  text = "text-base",
}) => {
  return (
    <button
      className={`h-12 px-3 py-2 ${bgColor} ${text} ${font} ${width} ${textColor} ${radius} ${border}`}
      onClick={click}
    >
      {name}
    </button>
  );
};

export default Button;
