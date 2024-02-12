import "./App.css";
import Home from "./modules/home.module";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import Cart from "./modules/cart.module";
import Product from "./modules/product.module";
import Landing from "./modules/landing/landing.module";
import ProductList from "./modules/product-list.module";

function App() {
  return (
    <div className="App">
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/product" element={<ProductList />}></Route>
          <Route path="/product/:id" element={<Product />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
