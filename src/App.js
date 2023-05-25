import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";

import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="w-full h-full ">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
