const CAKE_ORDERED = 'CAKE_ORDERD';

function orderCake() {
    return {
        type: CAKE_ORDERED,
        quanttity: 1,
    }
}

//state => has to be a single obgect
const initialState = {
    numberOfCakes: 10
}

//(previousState, action) => newState
export default (state = initialState, action) => {
    switch(action.type) {
        case CAKE_ORDERED:
            return {
                numberOfCakes: state.numberOfCakes - 1
            }
            default:
                return state
    }
}
