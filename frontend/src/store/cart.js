const CLEAR_CART = 'cart/LOAD'

const ADD_CART = 'cart/ADD'


const add = (listing) => {
    return{
        type: ADD_CART,
        payload: listing,
    }
}




export const addListingToCart = (listingId) => async(dispatch) =>{
    const response = await fetch(`/api/listings/${listingId}`)

    if (response.ok) {
        const listing = await response.json()
        dispatch(add(listing))
        return response
    }
}

const initialState = ({cart: []})

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_CART: {
            state.cart.push(action.payload)
            return state
        }
        default:
            return state
    }
}

export default cartReducer