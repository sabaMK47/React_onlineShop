import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import {ShopContextProvider} from "./data/ShopContext";
import ShopContext from "./data/ShopContext";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/basket" element={<Basket />} />
          </Routes>
        </Router>
      </ShopContextProvider>

    </div>
  );
}

export default App;
