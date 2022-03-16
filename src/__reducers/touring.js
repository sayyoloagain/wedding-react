import { CONSTANTS } from '../api';
let initState = {
    data: [],
    latest: {},

    dataList: [],
    pagination: {
      itemPerPage: 5,
      currentPage: 1,
      totalPage: 1,
    },
}

export function touring(state = initState, action) {
    let __state = { ...state }
    switch (action.type) {
        case CONSTANTS.TOURING.SUCCESS:
            return {
                data: action.result
            };
        case CONSTANTS.TOURING.LATEST_DATA_SUCCESS:
            // console.log('touring reducer', action.data)
                __state = {...state}
                __state.data = action.data
                 
                __state.pagination.currentPage = 1
                __state.pagination.totalPage = Math.ceil(__state.data.length / __state.pagination.itemPerPage)
                // console.log(__state.data.length);

                __state.dataList = []
                for (let i = 0; i < __state.data.length; i++) {
                    __state.dataList.push(__state.data[i])
                }
                // console.log(__state.dataList);

            return __state
        case CONSTANTS.TOURING.TOURING_SEARCH:
            __state = { ...state };
            __state.dataList = [];
            __state.dataSearch = [];
        
            __state.pagination.currentPage = 1;
            __state.pagination.searchValue = action.result;
            state.data.forEach((element) => {
                console.log(element);
                if (
                element.Device.ownerName.includes(action.result) ||
                element.Device.vehiclePlateNum.includes(action.result) ||
                element.Device.vehicleModel.includes(action.result) ||
                element.Device.vehicleBrand.includes(action.result)
                ) {
                __state.dataSearch.push(element);
                }
            });
        
            __state.pagination.totalPage = Math.ceil(
                __state.dataSearch.length / state.pagination.itemPerPage
            );
        
            let statePage = 0;
            for (let i = 0; i < __state.dataSearch.length; i++) {
                if (statePage < state.pagination.itemPerPage) {
                __state.dataList.push(__state.dataSearch[i]);
                statePage++;
                }
            }
        
            state = {
                ...__state,
            };
            return state;
        
        case CONSTANTS.TOURING.LOGS_COUNT_CHANGE:
            __state = { ...state };
            __state.pagination.itemPerPage = action.result;
            __state.pagination.currentPage = 1;
            __state.pagination.totalPage = Math.ceil(
                __state.data.length / action.result
            );
        
            __state.dataList = [];
            for (let i = 0; i < __state.data.length; i++) {
                if (i < action.result) {
                __state.dataList.push(__state.data[i]);
                }
            }
        
            state = {
                ...__state,
            };
            return state;

        case CONSTANTS.TOURING.LOGS_PAGE_CHANGE:
            __state = { ...state };
            __state.pagination.currentPage = action.result;
        
            __state.dataList = [];
            let _j = 0;
            for (
                let i = (action.result - 1) * state.pagination.itemPerPage;
                i < __state.data.length;
                i++
            ) {
                if (_j < state.pagination.itemPerPage) {
                __state.dataList.push(__state.data[i]);
                _j++;
                }
            }
        
            state = {
                ...__state,
            };
            return state;
          
        case CONSTANTS.CLEAR:
            return initState
        default:
            return state
    }
}

