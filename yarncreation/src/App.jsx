import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Products from "./pages/products/Products";
import AboutUs from "./pages/contact/AboutUs";
import Contact from "./pages/contact/Contact";
import Register from "./pages/register/Register";
import Login from "./pages/register/Login";
import ProductDetails from "./pages/products/ProductDetails";
import Footer from "./components/Footer";
import Collection from "./pages/products/Collection";
import Title from "./components/Title";
import BestSeller from "./components/BestSeller";
import Cart from "./pages/products/Cart";
import SuccessMsgDisplay from "./pages/products/SuccessMsgDisplay";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/success" element={<SuccessMsgDisplay/>} />

        
      
      </Routes>
      </BrowserRouter>
  );
}

export default App;
