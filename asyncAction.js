const redux = require('redux');
const createStore = redux.createStore;

//state
const initialState = {
    loading: false,
    users: [],
    error: '',
}

//declare action constants
const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED';
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED';
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';


//define the action creators
const fetchUsersRequested = () => {
    return {
        type: FETCH_USERS_REQUESTED,
    }   
}

const fetchUsersSuccess = (user) => {
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload: users,
    }
}

const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILED,
        payload:error,
    }
}

//define reducer function
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case FETCH_USERS_SUCCEEDED:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILED:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
    }
}

//create Store
const store = createStore(reducer)