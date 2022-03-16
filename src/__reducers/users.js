import { CONSTANTS } from '../api';
let initState = {
    data: []
}

export function users(state = initState, action) {
    //console.log(action)
    let __state = { ...state }
    switch (action.type) {
        case CONSTANTS.USER.LIST_SUCCESS:
            let count = 1
            let __data = action.data.map((items) => {
                return { ...items, seq: count++}
            })
            return {
                ...state,
                data: __data
            };
        case CONSTANTS.USER.LATEST_DATA_SUCCESS:
            console.log('reducer user', action.data)
                __state = {...state}
                __state.data = action.data
            return __state
        case CONSTANTS.CLEAR:
            return initState
        default:
            return state
    }
}
