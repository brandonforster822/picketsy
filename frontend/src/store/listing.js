import { csrfFetch } from './csrf'
const LOAD_LISTING = 'listing/LOAD'

const LOAD_USER_LISTINGS = 'listings/LOAD'

const LOAD_ALL = 'listings/LOADALL'

const CREATE_LISTING = 'listings/CREATE'

const DELETE_LISTING = 'listings/DELETE'

const load = (listing) => {
    return {
        type: LOAD_LISTING,
        payload: listing,
    }
}

const loadUser = (listings) => {
    return {
        type: LOAD_USER_LISTINGS,
        payload: listings,
    }
}

const loadAll = (listings) => {
    return {
        type: LOAD_ALL,
        payload: listings,
    }
}

const createOneListing = (listing) => {
    return {
        type: CREATE_LISTING,
        payload: listing,
    }
}

const deleteOneListing = (listing) => {
    return {
        type: DELETE_LISTING,
        payload: listing
    }
}

export const getOneListing = (listingId) => async(dispatch) =>{
    const response = await fetch(`/api/listings/${listingId}`)

    if (response.ok) {
        const listing = await response.json()
        dispatch(load(listing))
    }
}

export const getUserListings = (userId) => async(dispatch) =>{
    const response = await fetch(`/api/listings/user/${userId}`)

    if (response.ok) {
        const listings = await response.json()
        dispatch(loadUser(listings))
    }
}

export const getAllListings = () => async(dispatch) =>{
    const response = await fetch("/api/listings")
    
    if (response.ok) {
        const listings = await response.json()
        dispatch(loadAll(listings))
    }
}

export const getSearchListings = (search) => async(dispatch) =>{
    const response = await fetch(`/api/listings/search/${search}`)

    if(response.ok) {
        const listings = await response.json()
        dispatch(loadUser(listings))
    }
}

export const createListing = (createdListing) => async (dispatch) =>{
    const {name, userId, description, image, category, price } = createdListing
    const formData = new FormData()
    formData.append("name", name)
    formData.append("userId", userId)
    formData.append("description", description)
    formData.append("image", image)
    formData.append("category", category)
    formData.append("price", price)

    const res = await csrfFetch('/api/listings', {
        method: "POST",
        headers: {
            "Content-Type": "multipart/form-data",
        },
        body: formData,
    })

    const data = await res.json()
    dispatch(createOneListing(data.createdListing))
    return res
}

export const deleteListing = (listingId) => async (dispatch) =>{
    const res = await csrfFetch(`/api/listings/${listingId}`, {
        method: "DELETE"
    })
    const listing = await res.json()
    dispatch(deleteOneListing(listing))
    return res
}

const initialState = {listing: null}

const listingReducer = (state = initialState, action) =>{
    let newState
    switch(action.type) {
        case LOAD_LISTING:
            newState=Object.assign({}, state)
            newState = action.payload
            return newState
        case LOAD_USER_LISTINGS:
            newState=Object.assign({}, state)
            newState = action.payload
            return newState
        case LOAD_ALL:
            newState=Object.assign({}, state)
            newState = action.payload
            return newState
        case CREATE_LISTING:
            return { ...state, user: action.payload}
        case DELETE_LISTING:
            newState = {...state }
            delete newState[action.listingId]
            return newState
        default: return state
    }
}

export default listingReducer