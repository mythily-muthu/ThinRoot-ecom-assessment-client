import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { publicRequest } from "../axiosMethod";

const Cart = () => {
  let navigate = useNavigate();
  const [userCartProducts, setUserCartProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const cartItems = [
    {
      img_url:
        "data:image/jpeg;base64,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",
      title: "Heirloom tomato",
      rateperlb: "$5.99/lb",
      amount: "$5.99",
      quantity: "1 lb",
    },
    {
      img_url:
        "data:image/jpeg;base64,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",
      title: "Organic ginger",
      rateperlb: "$12.99/lb",
      amount: "$6.50",
      quantity: "0.5 lb",
    },
    {
      img_url:
        "data:image/jpeg;base64,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",
      title: "Sweet onion",
      rateperlb: "$2.99/lb",
      amount: "$14.95",
      quantity: "5 lb",
    },
  ];

  //get user's cart using userId
  // const getUsersCart = async () => {
  //   try {
  //     let res = await publicRequest.get(`/carts/${userDetails._id}`);
  //     console.log(res);

  //     const cartProductsData = res.data.carts.products;

  //     // // Filter the products based on the presence of their IDs in the cartProductIds array
  //     // let cartProducts = products.filter((product) => {
  //     //   const cartProductData = cartProductsData.find(
  //     //     (cartProduct) => cartProduct.productId === product._id
  //     //   );
  //     //   if (cartProductData) {
  //     //     return true;
  //     //   }
  //     //   return false;
  //     // });

  //     // // Add the quantity property to each product in cartProducts
  //     // cartProducts = cartProducts.map((product) => {
  //     //   const cartProductData = cartProductsData.find(
  //     //     (cartProduct) => cartProduct.productId === product._id
  //     //   );
  //     //   return {
  //     //     ...product,
  //     //     quantity: cartProductData.quantity,
  //     //   };
  //     // });
  //     // setUserCartProducts(cartProducts);
  //     // console.log("Cart Products:", cartProducts);
  //   } catch (error) {
  //     console.log("error:", error.message);
  //     setLoading(false);
  //   }
  // };

  useEffect(() => {
    // getUsersCart();
  }, []);

  return (
    <div className="flex flex-col w-full h-full bg-grey">
      <Topbar />
      <Navbar />

      <div className="flex h-full items-center w-[75%] mx-auto">
        <div className="flex w-full gap-x-8 mt-8">
          {/* left */}
          <div className="flex flex-col w-2/3 gap-y-8">
            {cartItems.map((item) => {
              return (
                <div
                  className=" flex font-semibold text-xl border-2  h-40 w-full rounded-3xl overflow-hidden"
                  style={{
                    fontFamily: "Inter",
                  }}
                >
                  <img
                    className="h-40 w-40 object-contain "
                    src={item.img_url}
                    alt="tomato"
                  />
                  <div className="flex justify-between p-6 bg-white w-full">
                    <div className="">
                      <p>{item.title}</p>
                      <p className="text-primary">{item.rateperlb}</p>
                      <p className="font-bold border-2 rounded-3xl h-10 w-32 flex items-center p-4 bg-white">
                        {item.quantity}
                      </p>
                    </div>
                    <p>{item.amount}</p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* right */}
          <div
            className="bg-white w-1/3 flex flex-col gap-y-8 p-6 h-max rounded-3xl border border-primary"
            style={{
              fontFamily: "Inter",
            }}
          >
            <p className="font-semibold text-xl">Order summary</p>
            <div className="flex justify-between">
              <div
                className="font-normal text-base flex flex-col gap-y-2 "
                style={{
                  fontFamily: "Inter",
                }}
              >
                <p className="">Subtotal</p>
                <p className="">Shipping</p>
                <p className="">Tax</p>
                <p className="font-semibold ">Total</p>
              </div>
              <div
                className="text-base flex flex-col gap-y-2"
                style={{
                  fontFamily: "Inter ",
                }}
              >
                <p className="">$27.44</p>
                <p className="">$3.99</p>
                <p className="">$2.00</p>
                <p className="font-semibold ">$33.43</p>
              </div>
            </div>
            <div className="flex justify-center ">
              <Button
                name={"Check Out"}
                width="w-80"
                font="font-bold"
                text="text-lg"
                click={() => navigate("/checkout")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
