import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAdd , faMinus} from "@fortawesome/free-solid-svg-icons"
import { useContext } from 'react'
import {ShopContext} from '../data/ShopContext'
import { Products } from '../data/Products'




function Product(props) {
    const {id , bookImage , bookName , authorName , price ,quantity} = props.data;
    const {addToCart,removeFromCart , cartItems} =useContext(ShopContext)
    const isincart = Products.some((item)=>(cartItems[item.id]!==0))
  return (
    <div className='col-2 my-4'>
    <div className='card h-100'>
        <img src={bookImage} className='card-img-top w-100'/>
        <div className='card-body'>
            <div className='card-title'>{bookName}</div>
            <div className='card-text'>{authorName}</div>
            <div className='card-text mb-5'>{price}</div>
            <div className='btns' style={{position:'absolute',bottom:'15px'}}>
            <button className='btn btn-danger p-1 mx-1 mt-1'>see details</button>
            <button className='btn btn-danger p-1 mt-1 mt-1' onClick={()=>addToCart(id)}><FontAwesomeIcon icon={faAdd}/></button>
            {isincart &&<span className='px-1'>{cartItems[id]}</span>}
            {isincart &&<button className='btn btn-danger p-1 mt-1 mt-1' onClick={()=>removeFromCart(id)}><FontAwesomeIcon icon={faMinus}/></button>}
            </div>

        </div>
    </div>
    </div>
  )
}

export default Product