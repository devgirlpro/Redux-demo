const CAKE_ORDERED = 'CAKE_ORDERD';

function orderCake() {
    return {
        type: CAKE_ORDERED,
        quanttity: 1,
    }
}

//state => has to be a single obgect
const initialState = {
    numberOfCakes: 10,
    anotherProperty: 2,
}

//(previousState, action) => newState
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1
            }
            default:
                return state
    }
}
