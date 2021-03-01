import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import * as listingActions from "../../store/listing"
import * as reviewActions from "../../store/review"
import {useParams} from 'react-router-dom'
import * as userActions from '../../store/users'
import ReviewModal from '../ReviewModal'
import * as cartActions from '../../store/cart'

function ListingPage() {
    const dispatch = useDispatch()
    const listingId = useParams()
    const listing = useSelector(state => state.listing)
    const listingReviews = useSelector(state => state.reviews)
    const users = useSelector(state => state.users)
    const [reviews, setReviews] = useState('')

    const handleAddToCart = () => {
        dispatch(cartActions.addListingToCart(listingId.id))
    }


    useEffect(() => {
        dispatch(listingActions.getOneListing(listingId.id))
        dispatch(reviewActions.getListingReviews(listingId.id))
        dispatch(userActions.getUsers())
    }, [])
 
    useEffect(() => {
        if (listingReviews.reviews && users.users) {
            setReviews(
            <div>
                {
                listingReviews.map((review) => {
                return(
                    <div>
                        <p>{users.users[review.userId - 1].username}</p>
                        <p>{review.comment}</p>
                        <p>{review.rating}/5</p>
                    </div>
                )
            })
            }
            </div>
        )
        }
        
    }, [listingReviews, users.users])
    return(
        <div>    
        <div>
            <p>name: {listing.name}</p>
            <p>description: {listing.description}</p>
            <img src={listing.imgLink}/>
            <p>category: {listing.category}</p>
            <button onClick={handleAddToCart}>Add to cart</button>
        </div>
        <div>
            <ReviewModal />
        </div>
        <div>
            {reviews}
        </div>
    </div>
)
}


export default ListingPage