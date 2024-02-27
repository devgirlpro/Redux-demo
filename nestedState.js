const redux = require('redux')

//initial state
const initialState = {
    name: 'Vishwa',
    address: {
        street: '123 Main st',
        city: 'Boston',
        state: 'MA',
    }
}

//define a constant fo action taype
const STREET_UPDATED = 'STREET_UPDATED';

//action action creator function
const streatUpdate = (streat) => {
    return {
        type: STREET_UPDATED,
        payload: streat,
    }
}

//define reducer to handle the action
const reducer = (state= initialState, action) => {
    switch(action.type) {
        case STREET_UPDATED:
        return {
            ...state,
            address: {
                ...state.address,
                streat: action.payload
            }
        }
        default: {
            return state
        }
    }
}


//create the store
const store = redux.createStore(reducer)
console.log('initial State =>', store.getState())

//subscribe to the store
const unsubscribe = store.subscribe(() => {
    console.log('updated state', store.getState())
})

//dispatch and update the satea
store.dispatch(streatUpdate('456 MAin ST'))

//unsubscribe
unsubscribe()