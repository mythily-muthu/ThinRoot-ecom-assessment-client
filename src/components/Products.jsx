import React from "react";

import { useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import ProductCard from "./ProductCard";

const Products = ({ products, loading }) => {
  // const [products, setProducts] = useState([]);
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

          {loading ? (
            <LoadingSpinner />
          ) : (
            <div className=" flex flex-wrap justify-center w-full gap-5 h-full ">
              {products.map((item) => {
                return (
                  <ProductCard key={item._id} item={item} click={handleClick} />
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
