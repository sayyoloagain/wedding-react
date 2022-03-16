import { CONSTANTS } from '../api';
let initState = {
    fenceList: [],
    latest: {},
}

export function fence(state = initState, action) {
    //console.log(action)
    let __state = { ...state }
    switch (action.type) {
        case CONSTANTS.DATAPLAN.DATA:
            return {
                fenceList: action.result,
            };
        case CONSTANTS.DATAPLAN.LATEST_READING:
            // return { ...state, latest: action.data };
                __state = {...state}
                __state.data = action.result
            return __state

            case CONSTANTS.DATAPLAN.ALLDATABYID:
                // return { ...state, latest: action.data };
                    __state = {...state}
                    __state.data = action.result
                return __state

       
        
        case CONSTANTS.CLEAR:
            return initState
        default:
            return state
    }
}
