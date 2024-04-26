import React from "react";
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Nav from "./components/Nav";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/basket" element={<Basket/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
