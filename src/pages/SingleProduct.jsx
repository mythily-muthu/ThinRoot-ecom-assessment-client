import React from "react";
import { useEffect, useState } from "react";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Button from "../components/Button";

const SingleProduct = () => {
  const [productDetails, setProductDetails] = useState({});
  const [loading, setLoading] = useState(true);
  let params = useParams();
  let navigate = useNavigate();

  console.log("params", params);

  let baseUrl = "https://mythu-ecommerce-app.onrender.com/product/find";

  const getProductDetails = async () => {
    let res = await axios.get(`${baseUrl}/${params.id}`);
    setProductDetails(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getProductDetails();
  }, []);
  console.log("productDetails", productDetails);

  return (
    <div className="flex flex-col h-full w-full ">
      <Topbar />
      <Navbar />
      {loading ? (
        <div className="flex h-full w-full justify-center items-center ">
          <img
            className="flex h-full w-[500px] justify-center items-center "
            src="https://static.vecteezy.com/system/resources/thumbnails/005/103/138/small_2x/2022-new-year-loading-bar-doodle-free-vector.jpg"
            alt="loading..."
          />
        </div>
      ) : (
        <div className="flex w-[73%] mx-auto h-full justify-center py-16">
          <div className="flex w-1/2 h-full items-center  ">
            <div className="w-full flex justify-center">
              <img
                src={productDetails.image_link}
                alt={productDetails.name}
                className="w-[500px] border border-yellow cursor-pointer"
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
              <p className="font-bold text-base tracking-[0.2em] ">
                SELECT SIZE
              </p>
              <div className="flex gap-x-5 tracking-[0.2em] pb-7 cursor-pointer">
                <p className="font-medium text-lg tracking-[0.2em] ">S</p>
                <p className="font-medium text-lg tracking-[0.2em]">M</p>
                <p className="font-medium text-lg tracking-[0.2em]">L</p>
                <p className="font-medium text-lg tracking-[0.2em]">XL</p>
                <p className="font-medium text-lg tracking-[0.2em]">XXL</p>
              </div>
              <div className="flex gap-x-5 tracking-[0.2em]">
                <p className="font-bold ">QUANTITY</p>
              </div>
              <div className=" flex gap-5 w-">
                <Button
                  name={"ADD TO BAG"}
                  textColor="text-black"
                  radius="rounded-3xl"
                  bgColor="bg-white"
                  border=" border border-black"
                  width="w-max"
                  click={() => navigate("/cart")}
                />
                <Button
                  name={"ADD TO WISHLIST"}
                  bgColor="bg-primary"
                  textColor="text-white"
                  radius="rounded-3xl"
                  width="w-max"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
