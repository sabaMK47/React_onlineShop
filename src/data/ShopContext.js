import {React, createContext, useState, useEffect } from "react";
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
   
    const [cartItems , setCartItems]=useState( JSON.parse(localStorage.getItem("cartdata")) || setDefaultCart())

    useEffect(()=>{  
     cartItems !== 0 && localStorage.setItem("cartdata",JSON.stringify(cartItems))
    },[cartItems])

    useEffect(()=>{
     const cartdata = localStorage.getItem("cartdata")
     setCartItems(!!JSON.parse(cartdata) ? JSON.parse(cartdata) : [])
    },[])

    const getTotalAmount = ()=>{
        let totalAmount = 0;
        for (const item in cartItems){
            let iteminfo = Products.find((product)=> product.id === Number(item));
            totalAmount += cartItems[item] * iteminfo.price;
        }
        return totalAmount;
    }

    const addToCart =(itemId)=>{
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    const removeFromCart =(itemId)=>{
        setCartItems((prev) =>({ ...prev, [itemId]:prev[itemId]===0 ? 0: prev[itemId] - 1 }));
        
    }

    const contextValues={cartItems , addToCart , removeFromCart , getTotalAmount}
  return (
    <ShopContext.Provider value={contextValues}>{props.children}</ShopContext.Provider>
  )
}

