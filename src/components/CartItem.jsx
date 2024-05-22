import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan, faAdd, faMinus } from "@fortawesome/free-solid-svg-icons"
import { useContext } from 'react';
import { ShopContext } from '../data/ShopContext';

export function CartItem(props) {
    const { id, bookImage, bookName, price } = props.data;
    const { cartItems, addToCart, removeFromCart } = useContext(ShopContext)
    return (
        <div>
            <div className='row d-flex ms-5 my-3 w-100 border rounded' style={{ position: "relative" }}>
                <div className='col-2 d-flex p-3'>
                    <img src={bookImage} style={{ width: "150px", height: "200px" }} />
                </div>
                <div className='col-6 p-3 mx-5'>
                    <h4>{bookName}</h4>
                    <h4>{price}</h4>
                    <div className='mt-5'>
                        <button className='btn btn-danger p-1 mt-1 mt-1' onClick={() => addToCart(id)}><FontAwesomeIcon icon={faAdd} /></button>
                        <span className='px-1'>{cartItems[id]}</span>
                        <button className='btn btn-danger p-1 mt-1 mt-1' onClick={() => removeFromCart(id)}><FontAwesomeIcon icon={faMinus} /></button>
                    </div>
                </div>

            </div>

        </div>
    )
}

