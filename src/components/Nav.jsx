import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBasketShopping} from "@fortawesome/free-solid-svg-icons"
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { ShopContext } from '../data/ShopContext';
function Nav() {
 
  return (
    <>
    <div className='navbar navbar-expand-lg bg-danger'>
        <div className='container'>
            <a className='navbar-brand text-white'>my online shop</a>
            <ul className='navbar-nav'>
                <Link to="/" className='navbar-item text-white mx-5 link-offset-2 link-offset-3-hover'>Shop</Link>
                <Link to="/Basket" className='navbar-item text-white fs-5'>
                  <FontAwesomeIcon icon={faBasketShopping}/></Link>

            </ul>
        </div>
    </div>

    </>
  )
}

export default Nav