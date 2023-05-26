import React, { useEffect, useState } from "react";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import Products from "../components/Products";

const JewelsProducts = () => {
  const [loading, setLoading] = useState(true);
  const products = useSelector((state) => state.products.products);
  const getElectronicsProducts = (category) => {
    return products.filter((product) => product.category === category);
  };
  console.log("elecat", getElectronicsProducts("electronics"));
  useEffect(() => {
    setTimeout(() => setLoading(false), 1300);
  }, []);
  return (
    <div className="flex flex-col w-full">
      <Topbar />
      <Navbar />
      <Products
        products={getElectronicsProducts("jewelery")}
        loading={loading}
      />
    </div>
  );
};

export default JewelsProducts;
