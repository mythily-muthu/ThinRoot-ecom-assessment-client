import React, { useEffect, useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BsCart4 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { publicRequest } from "../axiosMethod";
import { getUserCart } from "../redux/cartSlice";
import { logout } from "../redux/userSlice";

const Navbar = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.products);
  const [loading, setLoading] = useState(true);
  const [activeNav, setActiveNav] = useState("");
  const cartState = useSelector((state) => state.cart);
  const userState = useSelector((state) => state.user.user);

  let navList = [
    {
      title: "Women",
      link: "women",
    },
    {
      title: "Jewels",
      link: "jewels",
    },
    {
      title: "Electronics",
      link: "electronics",
    },
  ];
  const handleNavItem = (item) => {
    navigate(`/${item.link}`);
    setActiveNav(item.link);
  };

  const getUsersCart = async () => {
    try {
      let res = await publicRequest.get(`/carts/${userState._id}`);
      if (res.data.carts) {
        const cartProducts = res.data.carts.products.map((cartItem) => {
          const product = allProducts.find(
            (product) => product._id === cartItem.productId
          );
          return {
            ...product,
            quantity: cartItem.quantity,
            // cartItemId: cartItem._id,
          };
        });
        setLoading(false);
        dispatch(getUserCart(cartProducts));
      }
    } catch (error) {
      console.log("error:", error.message);
      setLoading(false);
    }
  };

  // while logout clear user data ;
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  useEffect(() => {
    getUsersCart();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex w-full min-h-20 p-3 bg-primary sticky top-0">
      <div className="flex w-full flex-col justify-center md:justify-between  md:flex-row items-center gap-3 md: xl:w-[80%] px-5  mx-auto ">
        <img
          src="https://imagescdn.pantaloons.com/img/app/brands/pantaloons/icons/logo_pantaloons.svg"
          alt="logo"
          className="flex w-40 xl:w-60 items-center cursor-pointer "
          onClick={() => navigate("/")}
        />

        <div className="flex text-white items-center gap-x-2 xl:gap-x-4 ">
          {navList.map((item) => {
            return (
              <p
                key={item.link}
                className={`uppercase hover:text-yellow cursor-pointer transition-all duration-100   ${
                  activeNav === item.link &&
                  "scale-125  border-b-2 border-b-yellow "
                } border-bottom text-sm xl:text-xl`}
                onClick={() => handleNavItem(item)}
              >
                {item.title}
              </p>
            );
          })}
        </div>
        <div className="flex items-center gap-10">
          <BsPerson
            title="user"
            size={30}
            className="text-white hover:text-yellow cursor-pointer"
          />

          <div className="relative">
            <BsCart4
              title="cart"
              size={30}
              className="text-white hover:text-yellow cursor-pointer"
              onClick={() => navigate("/cart")}
            />
            {loading ? (
              <p></p>
            ) : (
              <span className="absolute flex items-center justify-center bg-transparent border solid text-white -right-5 -top-2.5  rounded-full h-2 w-2 p-3">
                {cartState.totalItems}
              </span>
            )}
          </div>

          <FiLogOut
            title="logout"
            size={30}
            className="text-white hover:text-yellow cursor-pointer"
            onClick={handleLogout}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
