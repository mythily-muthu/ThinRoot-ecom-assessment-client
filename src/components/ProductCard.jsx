import React from "react";

const ProductCard = ({ item, click }) => {
  return (
    <div
      className="flex flex-col  gap-y-1.5 w-[300px] h-full cursor-pointer"
      key={item._id}
      onClick={() => click(item._id)}
    >
      <div className="w-full h-[300px] ">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-contain rounded-xl p-4 border border-yellow"
        />
      </div>
      <div
        className="flex flex-col py-5 gap-y-1 text-lg uppercase tracking-[0.1em] "
        style={{
          fontFamily: "Trirong",
        }}
      >
        <p className="font-extrabold">{item.title}</p>
        <p className="font-medium tracking-[0.4em]">${item.price}</p>
        <p className="font-bold text-base tracking-[0.2em] text-primary cursor-pointer">
          BUY NOW
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
