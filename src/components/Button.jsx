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
      className={`h-12 active:scale-95 transition-all duration-100 ease-out active:brightness-90 px-4 py-2 ${bgColor} ${text} ${font} ${width} ${textColor} ${radius} ${border}`}
      onClick={click}
    >
      {name}
    </button>
  );
};

export default Button;
