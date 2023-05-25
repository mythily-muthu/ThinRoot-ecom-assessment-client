import React from "react";
import products from "../data.json";

const Products = () => {
  return (
    <div className="flex w-full h-full ">
      <div className="flex flex-col w-[80%] h-full mx-auto ">
        <p>Pick up where you left off</p>
        <div>
          {products.map((item) => {
            return (
              <div className="w-52 h-72 flex flex-col" key={item._id}>
                <img
                  src={item.image_link}
                  alt={item.name}
                  className="w-52 h-72 object-cover"
                />
                <div>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <button className="p-3 text-white">BUY NOW</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
