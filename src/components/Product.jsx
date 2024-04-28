import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAdd} from "@fortawesome/free-solid-svg-icons"

function Product(props) {
    const {id , bookImage , bookName , authorName , price ,quantity} = props.data
  return (
    <div className='col-2 my-4'>
    <div className='card h-100'>
        <img src={bookImage} className='card-img-top w-100'/>
        <div className='card-body'>
            <div className='card-title'>{bookName}</div>
            <div className='card-text'>{authorName}</div>
            <div className='card-text'>{price}</div>
            <button className='btn btn-danger p-1 mx-2 mt-2'>see details</button>
            <button className='btn btn-danger p-1 mt-2'><FontAwesomeIcon icon={faAdd}/></button>
        </div>
    </div>
    </div>
  )
}

export default Product