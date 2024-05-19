import React from 'react'
import { useContext } from 'react'
import {CartItem} from '../components/CartItem'
import { Products } from '../data/Products'
import { ShopContext } from '../data/ShopContext'


function Basket() {
  const {cartItems}=useContext(ShopContext)
  return (
    <div>
      <h1 style={{marginLeft:"38%",padding:"30px"}}>your cart items</h1>
      {Products.map((item)=>{
        if(cartItems[item.id]!==0)
        return <CartItem data={item}/>
      })}
    </div>
  )
}

export default Basket