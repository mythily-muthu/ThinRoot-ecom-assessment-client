import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";
import Swal from "sweetalert2";
import { BsTrash } from "react-icons/bs";
import { publicRequest } from "../axiosMethod";
import { removeFromCart } from "../redux/cartSlice";

const Cart = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  const userState = useSelector((state) => state.user.user);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1300);
  }, []);

  const handleCheckout = (products) => {
    console.log(products);
    let productsIds = products.map((id) => id);
    Swal.fire({
      // position: "top-end",
      icon: "success",
      title: `Order has been saved  <br/> <hr /> Product Ids are ${productsIds}> `,
      showConfirmButton: false,
      timer: 2500,
    });
  };

  const handleDeleteCartItem = async (product) => {
    try {
      await publicRequest.delete(`/carts/${userState._id}/${product._id}`);
      dispatch(
        removeFromCart({ itemId: product._id, quantity: product.quantity })
      );
    } catch (error) {
      console.log("error:", error.message);
    }
  };

  console.log("cart:", cartState);
  return (
    <div className="flex flex-col w-full h-screen bg-grey">
      <Topbar />
      <Navbar />

      <div className="flex h-full  w-[75%] mx-auto">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="flex w-full gap-x-8 mt-8">
            {/* left */}
            {cartState.cartItems.length > 0 ? (
              <div className="flex flex-col w-2/3 gap-y-8">
                {cartState.cartItems.map((item) => {
                  return (
                    <div
                      key={item._id}
                      className=" flex font-semibold text-xl border-2  min-h-40 h-max w-full rounded-3xl overflow-hidden"
                      style={{
                        fontFamily: "Inter",
                      }}
                    >
                      <img
                        className=" bg-white p-4 w-40 object-contain "
                        src={item.image}
                        alt="tomato"
                      />
                      <div className="flex justify-between p-6 bg-white w-full">
                        <div className="flex flex-col gap-y-2 w-full">
                          <p>{item.title}</p>
                          <p className="text-primary">{item.rateperlb}</p>
                          <p className="font-bold border-2 rounded-xl h-10 w-max  flex items-center px-6 py-4 bg-white">
                            Qty: {item.quantity}
                          </p>
                          <p>{item.price}</p>
                          <div className="flex w-full items-center justify-between">
                            <Button
                              name={"Shop more"}
                              width="w-max"
                              font="font-bold"
                              text="text-lg"
                              bgColor="bg-primary"
                              click={() => navigate("/")}
                            />
                            <BsTrash
                              className="cursor-pointer text-red-600 "
                              title="delete"
                              onClick={() => handleDeleteCartItem(item)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-col  w-[75%] mx-auto gap-y-3 ">
                <p> No cart item here, Shop more...!</p>
                <Button
                  name={"Shop more"}
                  width="w-max"
                  font="font-bold"
                  text="text-lg"
                  bgColor="bg-primary"
                  click={() => navigate("/")}
                />
              </div>
            )}
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
                  <p className="">Discount</p>
                  <p className="font-semibold ">Total</p>
                </div>
                <div
                  className="text-base flex flex-col gap-y-2"
                  style={{
                    fontFamily: "Inter ",
                  }}
                >
                  <p className="">${cartState.totalPrice.toFixed(2)}</p>
                  <p className="">$5.00</p>
                  <p className="">$5.00</p>
                  <p className="font-semibold ">
                    ${cartState.totalPrice.toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="flex justify-center ">
                <Button
                  name={"Check Out"}
                  width="w-80"
                  font="font-bold"
                  text="text-lg"
                  click={() =>
                    handleCheckout(cartState.cartItems.map((item) => item._id))
                  }
                />
              </div>
              <div className="flex justify-center ">
                <Button
                  name={"Continue shopping"}
                  width="w-80"
                  font="font-bold"
                  text="text-lg"
                  bgColor="bg-primary"
                  click={() => navigate("/")}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
