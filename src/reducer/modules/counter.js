export const initailState = {
    number: 0,
    color: '#bfcd7e',
}

export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const COLOR_CHANGE = "COLOR_CHANGE"

export const incrementAction = () => ({
    type: INCREMENT
})

export const decrementAction = () => ({
    type: DECREMENT
})

export const colorChangeAction = (colors) => ({
    type: COLOR_CHANGE, 
    colorData: colors,
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
            number: state.number - 1
        }

        case COLOR_CHANGE : 
            return {
                ...state,
                color: action.colorData,
            }

        default : return state
    }
}