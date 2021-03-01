import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import './AccountPage.css'
import * as listingActions from '../../store/listing'
import * as reviewActions from '../../store/review'
import ListingModal from '../ListingModal'


function AccountPage() {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const sessionUserId = useSelector(state => state.session.user.id)
    const profileImage = (sessionUser.profileImageUrl)
    const allListings = useSelector(state => state.listing.listings)
    const userReviews = useSelector(state => state.reviews)
    const [conditional, setConditional] = useState('')
    
    useEffect(() => {
        dispatch(listingActions.getAllListings(sessionUserId))
        dispatch(reviewActions.getUserReviews(sessionUserId))
    }, [])

    const handleListingDelete = (e) => {
        e.preventDefault()
        const listingId = e.target.value
        return dispatch(listingActions.deleteListing(listingId))
    }

    const handleReviewDelete = (e) => {
        e.preventDefault()
        const reviewId = e.target.value
        return dispatch(reviewActions.deleteReview(reviewId))
    }

    let content
    if(conditional === 'listings') {
        content = (
            <div className='content-container'>
                {allListings.map((listing) => {
                    if(listing.userId === sessionUserId){
                        return(
                            <div key={listing.id} className={`listing-container`}>
                                <div className='item-name'>
                                    <h4>{listing.name}</h4>
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
                                <div className="delete-button">
                                    <button value={listing.id} onClick={handleListingDelete}>Delete listing</button>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        )
    }
    else if(conditional === 'reviews') {
        content = (
            <div className='content-container'>
                {userReviews.map((review) => {
                    return(
                        <div key={review.id} className='listing-container'>
                            <div className='review-name'>
                                <h4>{allListings[review.listingId - 1].name}</h4>
                                <img src={allListings[review.listingId - 1].imgLink}/>
                            </div>
                            <div className='review-description'>
                                <h4>Review:</h4>
                                <p>{review.comment}</p>
                            </div>
                            <div className='review-rating'>
                                <h4>Rating:</h4>
                                <p>{review.rating}/5</p>
                            </div>
                            <div className='review-delete-button'>
                                <button value={review.id} onClick={handleReviewDelete}>Delete Review</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
    else {
        content = (
            <div>

            </div>
        )
    }




    return (
        <div className='page-container'>
            <div className="account-header">
                <img src={profileImage}/>
                <h3>Welcome, {sessionUser.username}</h3>
                <ul>
                    <li onClick={() => setConditional('listings')}>
                        Your listings
                    </li>
                    <li onClick={() => setConditional('reviews')}>
                        Your reviews
                    </li>
                    <ListingModal />
                </ul>
            </div>
            <div className='content-container'>
                {content}
            </div>
        </div>
    )
}

export default AccountPage