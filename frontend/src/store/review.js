import { csrfFetch } from "./csrf"

const LOAD_USER_REVIEWS = 'user_reviews/LOAD'
const LOAD_LISTING_REVIEWS = 'listing_reviews/LOAD'
const CREATE_REVIEW = 'review/CREATE'
const DELETE_REVIEW = 'review/DELETE'

const loadUser = (reviews) => {
    return{
        type: LOAD_USER_REVIEWS,
        payload: reviews,
    }
}

const loadListing = (reviews) => {
    return {
        type: LOAD_LISTING_REVIEWS,
        payload: reviews,
    }
}

const createOneReview = (review) => {
    return {
        type: CREATE_REVIEW,
        payload: review,
    }
}

const deleteOneReview = (review) => {
    return {
        type: DELETE_REVIEW,
        payload: review,
    }
}

export const getUserReviews = (userId) => async(dispatch) => {
    const response = await fetch(`/api/reviews/user/${userId}`)

    if (response.ok) {
        const reviews = await response.json()
        dispatch(loadUser(reviews))
    }
}

export const getListingReviews = (listingId) => async(dispatch) => {
    const response = await fetch(`/api/reviews/listing/${listingId}`)

    if(response.ok) {
        const reviews = await response.json()
        dispatch(loadListing(reviews))
    }
}

export const createReview = (createdReview) => async (dispatch) => {
    const { comment, rating, userId, listingId } = createdReview
    const response = await csrfFetch('/api/reviews', {
        method: "POST",
        body: JSON.stringify({ comment, rating, userId, listingId })
    })
    const data = await response.json()
    dispatch(createOneReview(data.createdReview))
    return response
}

export const deleteReview = (reviewId) => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: "DELETE"
    })
    const review = await res.json()
    dispatch(deleteOneReview(review))
    return res
}

const initialState = {reviews: null}

const reviewReducer = (state = initialState, action) =>{
    let newState
    switch(action.type) {
        case LOAD_USER_REVIEWS:
            newState=Object.assign({}, state)
            newState = action.payload
            return newState
        case LOAD_LISTING_REVIEWS:
            newState=Object.assign({}, state)
            newState = action.payload
            return newState
        default: return state
    }
}

export default reviewReducer