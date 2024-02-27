const redux = require('redux');
const createStore = redux.createStore;

const CAKE_ORDERED = 'CAKE_ORDERD';
const CAKE_RESTOCKED = "CAKE_RESTOCKED"

const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED"


//action creator function for order cake
function orderCake() {
    return {
        type: CAKE_ORDERED,
        quantity: 1,
    }
}



//action creator for restocked cake
function restockedCake(qty = number) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty
    }
}

//action creator for order icecream
function orderIceCream(qty = 1) {
    return {
        type: ICECREAM_ORDERED,
        payload: qty
    }
}

//action creator for restoked icecream
function restockedIceCream(qty = number) {
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty,
    }
}

//state => has to be a single obgect
const initialState = {
    numberOfCakes: 10,
    numberOfIceCreams: 15,
}

//(previousState, action) => newState
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1
            }
            case CAKE_RESTOCKED:
                return {
                    ...state,
                    numberOfCakes: state.numberOfCakes + action.payload
                }
            case ICECREAM_ORDERED:
                return {
                    ...state,
                    numberOfIceCreams: state.numberOfIceCreams - 1
                }
            case ICECREAM_RESTOCKED:
                return {
                    ...state,
                    numberOfIceCreams: state.numberOfIceCreams + action.payload
                }
                
            default:
                return state
    }
}


//redux store holding the aplicatio state, reducer has th einitial state
const store = createStore(reducer)

//access to state via getState()
console.log('initial state =>', store.getState())

//allows the App to subscribe to changes in the store  subscribe(listener)
const unsubscribe = store.subscribe(() => console.log('updated state =>', store.getState()))

//store provide dispatch() method to update the state
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(restockedCake(5))

//useing bindActionCreators
const actions = redux.bindActionCreators({restockedIceCream, orderIceCream}, store.dispatch)

actions.orderIceCream()
actions.orderIceCream()

actions.restockedIceCream(5)


//unsubscribe from the store: by calling the function returned by the subscribe mehod
unsubscribe()