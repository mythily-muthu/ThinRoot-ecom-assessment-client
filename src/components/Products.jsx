import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import { publicRequest } from "../axiosMethod";

const Products = () => {
  const [loading, setLoading] = useState(true);
  // const [products, setProducts] = useState([]);
  let navigate = useNavigate();
  const handleClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const getAllProducts = async () => {
    try {
      let res = await publicRequest.get("/products");
      if (res.status === 200) {
        setProducts(res.data.products);
      }
    } catch (error) {
      console.log("error", error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProducts();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
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

          {loading ? (
            <LoadingSpinner />
          ) : (
            <div className=" flex flex-wrap justify-center w-full gap-5 h-full ">
              {products.map((item) => {
                return (
                  <div
                    className="flex flex-col  gap-y-1.5 w-[300px] h-full"
                    key={item._id}
                    onClick={() => handleClick(item._id)}
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
                      <p className="font-medium tracking-[0.4em]">
                        ${item.price}
                      </p>
                      <p className="font-bold text-base tracking-[0.2em] text-primary cursor-pointer">
                        BUY NOW
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
