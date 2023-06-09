import React from "react";
import { useEffect, useState } from "react";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

import { publicRequest } from "../axiosMethod";
import LoadingSpinner from "../components/LoadingSpinner";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import Swal from "sweetalert2";

const SingleProduct = () => {
  let dispatch = useDispatch();
  let userState = useSelector((state) => state.user.user);
  const [quantity, setQuantity] = useState(1);
  const [productDetails, setProductDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [activeSize, setActiveSize] = useState("M");
  let params = useParams();
  let navigate = useNavigate();

  let availableSizes = ["XS", "S", "M", "L", "XL"];

  const getProductDetails = async () => {
    try {
      let res = await publicRequest.get(`/products/${params.productid}`);
      if (res.status === 200) {
        setProductDetails(res.data.product);
        setLoading(false);
      }
    } catch (error) {
      console.log("error:", error.message);
      setLoading(false);
    }
  };

  const handleInc = () => {
    if (quantity <= 12) setQuantity((prev) => prev + 1);
  };
  const handleDec = () => {
    if (quantity > 0) setQuantity((prev) => prev - 1);
  };

  const handleChooseSize = (size) => {
    setActiveSize(size);
  };

  const handleAddToCart = async (product) => {
    try {
      await publicRequest.post("/carts/add", {
        userId: userState._id,
        productId: product._id,
        quantity: quantity,
      });
      Swal.fire({
        icon: "success",
        title: "Product added..!",
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch(addToCart({ item: product, quantity }));
    } catch (error) {
      console.log("error:", error.message);
    }
  };

  useEffect(() => {
    getProductDetails();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex flex-col items-center h-full w-full ">
      <Topbar />
      <Navbar />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="w-full lg:w-[73%] grid grid-cols-12 gap-8  h-full justify-center p-10">
          <div className="col-span-12 h-[300px] md:col-span-6 md:h-[500px] flex w-full items-center  ">
            <img
              src={productDetails.image}
              alt={productDetails.title}
              className="w-full border h-full object-contain p-5 border-yellow cursor-pointer"
            />
          </div>

          <div
            className="col-span-12 h-full  flex md:col-span-6 flex-col gap-y-5 p-3 "
            style={{
              fontFamily: "Trirong",
            }}
          >
            <p className="font-semibold text-xl md:text-3xl tracking-[0.1em] items-baseline border-b-2 border-yellow ">
              {productDetails.title}
            </p>
            <div className="flex tracking-[0.1em] ">
              <p className="pt-5 text-md md:text-lg  tracking-[0.1em]">
                {productDetails.description}
              </p>
            </div>
            <p className="font-bold text-2xl tracking-[0.2em] py-4">
              ${productDetails.price}
            </p>
            <p className="font-bold text-base tracking-[0.2em] ">SELECT SIZE</p>
            {["men's clothing", "women's clothing"].includes(
              productDetails.category
            ) && (
              <div className="flex gap-x-5 tracking-[0.2em]  cursor-pointer ">
                {availableSizes.map((size, i) => {
                  return (
                    <p
                      key={i}
                      onClick={() => handleChooseSize(size)}
                      className={`font-medium text-lg tracking-[0.2em] border border-yellow ${
                        activeSize === size &&
                        "bg-primary text-white border-transparent"
                      } rounded-md px-4 py-2`}
                    >
                      {size}
                    </p>
                  );
                })}
              </div>
            )}
            <div className="flex flex-col gap-y-3 tracking-[0.2em] w-full">
              <p className="font-bold ">QUANTITY</p>
              <div className="flex gap-x-3 items-center w-full">
                {/* minus */}
                <div
                  onClick={handleDec}
                  className="border transition-all duration-100 ease-in active:scale-95 active:brightness-95 border-yellow h-8 w-8 flex items-center justify-center rounded-md cursor-pointer"
                >
                  <BiMinus title="decrement" size={30} />
                </div>
                <p>{quantity}</p>

                {/* plus */}
                <div
                  className="border transition-all duration-100 ease-in active:scale-95 active:brightness-95 border-yellow h-8 w-8 flex items-center justify-center rounded-md cursor-pointer"
                  onClick={handleInc}
                >
                  <BsPlus title="increment" size={30} />
                </div>
              </div>
            </div>
            <div className=" flex gap-x-5 w-full">
              <Button
                name={"ADD TO CART"}
                textColor="text-black"
                radius="rounded-3xl"
                bgColor="bg-white"
                border=" border border-black"
                width="w-max"
                click={() => handleAddToCart(productDetails)}
              />
              <Button
                name={"GO TO CART"}
                bgColor="bg-primary"
                textColor="text-white"
                radius="rounded-3xl"
                width="w-max"
                click={() => navigate("/cart")}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
