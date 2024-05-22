import React from 'react'
import { useContext } from 'react'
import {CartItem} from '../components/CartItem'
import { Products } from '../data/Products'
import { ShopContext } from '../data/ShopContext'
import {useNavigate} from 'react-router-dom'


function Basket() {
  const {cartItems , getTotalAmount}=useContext(ShopContext)
  let totalAmount = getTotalAmount();
  const navigate = useNavigate();
  return (
    <div className='flex-d row w-100'>
      <div className='cartItems col-7'>
      {totalAmount>0 ? (<h1 style={{marginLeft:"38%",padding:"30px"}}>your cart items</h1>):(<h1 style={{marginLeft:"49%",padding:"30px"}}>your cart is empty</h1>)}
      {Products.map((item)=>{
        if(cartItems[item.id]!==0)
        return <CartItem data={item}/>
      })}
      </div>
      {totalAmount > 0 &&(
      <div className='col-4 mt-5' style={{position:"fixed",right:"40px"}}>
        <div className='card'>
          <div className='card-header'>
            <h4>the total amount of your cart</h4>
          </div>
          <div className='card-body'>
            <p>products total amount: ${totalAmount}</p>
            <p>discount: 0</p>
            <p>delivery: 0</p>
            <p>tax: 0</p>
            <p><b>the final price: $ {totalAmount}</b></p>
          </div>
          <div className='card-footer'>
            <button className='btn btn-danger p-2 m-2' onClick={()=>navigate("/")}>continue shopping</button>
            <button className='btn btn-danger p-2 m-2'>checkout</button>
          </div>
        </div>
      </div>)}

    </div>
  )
}

export default Basket