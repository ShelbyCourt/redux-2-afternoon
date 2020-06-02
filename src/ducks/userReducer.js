import axios from 'axios'

const initialState = {
    email: null,
    firstName: null,
    lateName: null
}

const REQUEST_USER_DATA = 'REQUEST_USER_DATA'

export const requestUserData = () => {
    let data = axios.get('/auth/user-data').then(res => res.data)
    return {
        type: REQUEST_USER_DATA,
        payload: data
    }
}


export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case REQUEST_USER_DATA + '_FULFILLED':
            const { email, firstName, lastName } = action.payload.user
            return { email, firstName, lastName };

        //     return { ...state, isLoading: true}
        // case REQUEST_USER_DATA + + '_FULFILLED':
        //     return { ...state, users: action.payload.data, isLoading: false }
        // case REQUEST_USER_DATA + '_REJECTED':
        //     return { ...state, isLoading: false}
        default:
            return state;
    }
        
}