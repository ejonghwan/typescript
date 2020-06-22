export const initailState = {
    number: 0,
}

export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"

export const incrementAction = () => ({
    type: INCREMENT
})

export const decrementAction = () => ({
    type: DECREMENT
})


export default function counter(state = initailState, action) {
    switch( action.type ) { 
        
        case INCREMENT : 
            return {
                ...state,
                number: state.number + 1
            }

        case DECREMENT : 
        return {
            ...state,
            number: state.number + 1
        }

        default : return state
    }
}