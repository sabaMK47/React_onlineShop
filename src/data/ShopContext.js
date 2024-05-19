import {React, createContext, useState } from "react";
import { Products } from "./Products";

export const ShopContext = createContext(null)

const setDefaultCart=()=>{
    let cart ={}
    for(let i=1;i<=Products.length;i++){
        cart[i] = 0;
    }
    return cart;
} 

export const ShopContextProvider=(props)=> {
   
    const [cartItems , setCartItems]=useState(setDefaultCart())

    const addToCart =(itemId)=>{
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    const removeFromCart =(itemId)=>{
        setCartItems((prev) =>({ ...prev, [itemId]:prev[itemId]===0 ? 0: prev[itemId] - 1 }));
        
    }

    const contextValues={cartItems , addToCart , removeFromCart}
  return (
    <ShopContext.Provider value={contextValues}>{props.children}</ShopContext.Provider>
  )
}

