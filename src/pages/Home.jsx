import React, { useEffect, useState } from "react";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { publicRequest } from "../axiosMethod";
import { getProducts } from "../redux/productsSlice";

const Home = () => {
  const userState = useSelector((state) => state.user.user);
  const products = useSelector((state) => state.products.products);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  let navigate = useNavigate();
  useEffect(() => {
    if (!userState) {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, [userState]);

  //get all products from api
  const getAllProducts = async () => {
    try {
      let res = await publicRequest.get("/products");
      if (res.status === 200) {
        dispatch(getProducts(res.data.products));
        // setProducts(res.data.products);
        setLoading(false);
      }
    } catch (error) {
      console.log("error", error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex flex-col w-full">
      <Topbar />
      <Navbar />
      <Products products={products} loading={loading} />
    </div>
  );
};

export default Home;
