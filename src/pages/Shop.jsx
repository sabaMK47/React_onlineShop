import React from 'react'
import Product from '../components/Product'
import {Products} from "../data/Products"

function Shop() {
  return (
    <div className='row my-4 mx-2'>
      {Products.map((booksdata)=><Product key={booksdata.id} data={booksdata}/>)}
    </div>
  )
}

export default Shop