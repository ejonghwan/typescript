const initalState = {
    input: '',
    list: [],
}


export const CHANGE_INPUT = "CHANGE_INPUT"
export const INSERT = "INSERT" 
export const UPDATE = "UPDATE"
export const REMOVE = "REMOVE"

let id = 1;

export const changeInputAction = (text) => ({
    type: CHANGE_INPUT,
    
})

export const insertAction = (color, id) => ({
    type: INSERT,
    insert: color => ({color, id: id++}) 
})

export const updateAction = (id) => ({
    type: UPDATE,
    id: id
    
})

export const removeAction = (id) => ({
    type: REMOVE,
    id:id
})


export default function reducer( state = initalState, action ) {
    switch(action.type) {
        case CHANGE_INPUT : 
        return {
            ...state,
            input: action.text,
        }

        case INSERT : 
        return {
            ...state,
            list: state.list.concat({
                id: action.insert.id,
                color: action.color,
                opacity: 1
            })
        }

        case UPDATE : 
        return {
            ...state,
            list: state.list.map(item => {
                if(item.id === action.id) {
                    return {
                        ...item,
                        opacity: item.opacity - 0.1
                    }
                }
                return item;
            })
        }

        case REMOVE : 
        return {
            ...state,
            list: state.list.filter(item => item.id !== action.id)
        }

        
    }
}