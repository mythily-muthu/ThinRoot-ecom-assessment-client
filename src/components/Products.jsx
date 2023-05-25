import React from "react";
import products from "../data.json";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Products = () => {
  let navigate = useNavigate();
  const handleClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="flex w-full min-h-screen ">
      <div className="flex flex-col w-[80%] h-full mx-auto ">
        <div className="pt-12 flex flex-col gap-y-10 justify-center">
          <p
            className="flex text-4xl"
            style={{
              fontFamily: "Trirong",
            }}
          >
            Pick up where you left off
          </p>

          <div className=" flex flex-wrap w-full gap-x-20  h-full items-center justify-center">
            {products.map((item) => {
              return (
                <div
                  className="flex w-[20%] py-10"
                  key={item._id}
                  onClick={() => handleClick(item._id)}
                >
                  <div className="flex flex-col ">
                    <img
                      src={item.image_link}
                      alt={item.name}
                      className="w-80 h-[500px] object-contain rounded-xl mx-auto border border-yellow"
                    />
                    <div
                      className="flex flex-col py-5 gap-y-2 text-lg uppercase tracking-[0.1em] "
                      style={{
                        fontFamily: "Trirong",
                      }}
                    >
                      <p className="font-bold">{item.name}</p>
                      <p className="">${item.price}</p>
                    </div>

                    <Button name={"BUY NOW"} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
