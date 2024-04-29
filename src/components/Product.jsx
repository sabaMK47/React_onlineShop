import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAdd , faMinus} from "@fortawesome/free-solid-svg-icons"

function Product(props) {
    const {id , bookImage , bookName , authorName , price ,quantity} = props.data
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
            <button className='btn btn-danger p-1 mt-1 mt-1'><FontAwesomeIcon icon={faAdd}/></button>
            <a className='px-1'>0</a>
            <button className='btn btn-danger p-1 mt-1 mt-1'><FontAwesomeIcon icon={faMinus}/></button>
            </div>

        </div>
    </div>
    </div>
  )
}

export default Product