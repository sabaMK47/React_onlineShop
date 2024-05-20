import React from "react"
import {Products} from "../data/Products"
import {useState} from 'react'
export function useCart() {

    const setDefaultCart=()=>{
        let cart ={}
        for(let i=1;i<=Products.length;i++){
            cart[i] = 0;
        }
        return cart;
    } 

    const [cartItems , setCartItems]=useState(setDefaultCart())

    const addToCart =(itemId)=>{
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    const removeFromCart =(itemId)=>{
        setCartItems((prev) =>({ ...prev, [itemId]:prev[itemId]===0 ? 0: prev[itemId] - 1 }));
        
    }
  return (cartItems , addToCart , removeFromCart)
  
}

