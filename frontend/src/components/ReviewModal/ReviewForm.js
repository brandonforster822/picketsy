import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as reviewActions from '../../store/review'
import {useParams} from 'react-router-dom'

function ReviewForm({modalClose}){
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user)
    const [comment, setComment] = useState("")
    const [rating, setRating] = useState("")
    const userId = sessionUser.id;
    const listing = useParams()
    const listingId = listing.id


    const handleSubmit = (e) => {
        e.preventDefault()
        return dispatch(reviewActions.createReview({ comment, rating, userId, listingId }))
    }

    return(
        <div>
            <div>
                <h2>Leave Review</h2>
            </div>
            <form onSubmit={(e) => handleSubmit(e) && modalClose()}>
                <div>
                    <label>
                        Comment
                    </label>
                    <input type='text' value={comment} onChange={(e) => setComment(e.target.value)} required/>
                </div>
                <div>
                    <label>
                        Rating
                    </label>
                    <input type='text' value={rating} onChange={(e) => setRating(e.target.value)}/>
                </div>
                <div>
                    <button type='submit'>Leave Review</button>
                </div>
            </form>
        </div>
    )
}

export default ReviewForm