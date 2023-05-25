import React from "react";
import { useEffect, useState } from "react";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleProduct = () => {
  const [productDetails, setProductDetails] = useState({});
  let params = useParams();
  console.log("params", params);

  let baseUrl = "https://mythu-ecommerce-app.onrender.com/product/find";

  const getProductDetails = async () => {
    let res = await axios.get(`${baseUrl}/${params.id}`);
    setProductDetails(res.data);
  };

  useEffect(() => {
    getProductDetails();
  }, []);
  console.log("productDetails", productDetails);

  return (
    <div className="flex flex-col h-full w-full ">
      <Topbar />
      <Navbar />

      <div className="flex w-[73%] mx-auto h-full justify-center py-16">
        <div className="flex w-1/2 h-full items-center  ">
          <div className="w-full flex justify-center">
            <img
              src={productDetails.image_link}
              alt={productDetails.name}
              className="w-[500px] border border-yellow"
            />
          </div>
        </div>

        <div className="w-1/2  h-full">
          <div
            className="flex flex-col gap-y-5 p-3 "
            style={{
              fontFamily: "Trirong",
            }}
          >
            <p className="font-semibold text-4xl tracking-[0.1em] items-baseline border-b-2 border-yellow ">
              {productDetails.name}
            </p>
            <p className="font-medium text-2xl tracking-[0.2em] py-4">
              ${productDetails.price}
            </p>
            <p className="font-bold text-base tracking-[0.2em] ">SELECT SIZE</p>
            <div className="flex gap-x-5 tracking-[0.2em] pb-7 ">
              <p className="font-medium text-lg tracking-[0.2em] ">S</p>
              <p className="font-medium text-lg tracking-[0.2em]">M</p>
              <p className="font-medium text-lg tracking-[0.2em]">L</p>
              <p className="font-medium text-lg tracking-[0.2em]">XL</p>
              <p className="font-medium text-lg tracking-[0.2em]">XXL</p>
            </div>
            <div className="flex gap-x-5 tracking-[0.2em]">
              <p className="font-bold ">QUANTITY</p>
            </div>
            <div className=" flex gap-5">
              <button className="p-3 border border-black font-semibold tracking-[0.2em] rounded-3xl px-7">
                ADD TO WISHLIST
              </button>
              <button className="p-3 bg-primary text-white font-semibold tracking-[0.2em] rounded-3xl px-7">
                ADD TO BAG
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
