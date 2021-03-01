import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import * as cartActions from '../../store/cart'
import {useHistory} from 'react-router-dom'


function CartPage(){
    const dispatch = useDispatch()
    const history = useHistory()
    const cartListings = useSelector(state => state.cart.cart)


    const handleCart = () => {
        window.location.reload()
    }

    return(
        <div className='content-container'>
                {cartListings.map((listing) => {
                    return(
                        <div key={listing.id} className={`listing-container`}>
                            <div className='item-name'>
                                <h4 onClick={() => history.push(`/listing/${listing.id}`)}>{listing.name}</h4>
                                <img src={listing.imgLink}/>
                            </div>
                            <div className='item-description'>
                                <h4>Description:</h4>
                                <p>{listing.description}</p>
                            </div>
                            <div className='item-price'>
                                <h4>Price:</h4>
                                <p>{listing.price}</p>
                            </div>
                        </div>
                )
            }
        )}
        <button onClick={handleCart}> Purchase Items </button>
        </div>
    )
}


export default CartPage