const LOAD_USERS = '/users/LOAD'

const load = (users) => {
    return {
        type: LOAD_USERS,
        payload: users,
    }
}

export const getUsers = () => async(dispatch) =>{
    const response = await fetch('/api/users')

    if (response.ok) {
        const users = await response.json()
        dispatch(load(users))
    }
}


const initialState = {users: null}

const userReducer = (state = initialState, action) =>{
    let newState
    switch(action.type) {
        case LOAD_USERS:
            newState=Object.assign({}, state)
            newState = action.payload
            return newState
        default: return state
    }
}

export default userReducer