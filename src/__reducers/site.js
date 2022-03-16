import { CONSTANTS } from '../api';
let initState = {
  data: [],
  dataList: [],
    latest: {},
    pagination: {
      itemPerPage: 5,
      currentPage: 1,
      totalPage: 1,
    },
    
    dataList1: [],
    pagination1: {
      itemPerPage: 5,
      currentPage: 1,
      totalPage: 1,
    },

    
    dataList2: [],
    pagination2: {
      itemPerPage: 5,
      currentPage: 1,
      totalPage: 1,
    },

    searchValue: "",
    dataSearch: [],
};

export function site(state = initState, action) {
    // console.log(action)
    // let __state = { ...state }
    // switch (action.type) {
    //     case CONSTANTS.SITE.SUCCESS:
    //         return {
    //             data: action.result
    //         };
    //     case CONSTANTS.SITE.LATEST_DATA_SUCCESS:
    //         console.log('reducer site', action.data)
    //             __state = {...state}
    //             __state.data = action.data
    //         return __state
    //     case CONSTANTS.SITE.LATEST_COMPANY_DATA_SUCCESS:
    //         console.log('reducer site', action.data)
    //             __state = {...state}
    //             __state.data = action.data
    //         return __state
    //     case CONSTANTS.CLEAR:
    //         return initState
    //     default:
    //         return state
    // }
    
    let __state = { ...state }
    switch (action.type) {
        case CONSTANTS.SITE.SUCCESS:
            return {
                data: action.result
            };
        case CONSTANTS.SITE.LATEST_DATA_SUCCESS:
            console.log('reducer site', action.data)
                __state = {...state}
                __state.data = action.data
                let _data = [];
                console.log(action.data.length)
                  for (let i = 0; i < action.data.length; i++) {
                    if (i < 5) {
                      _data.push(action.data[i]);
                    }
                  }
                console.log(_data)

                __state = {
                    ...state,
                    data: action.data,
                    dataList: _data,
                    pagination: {
                      itemPerPage: 5,
                      currentPage: 1,
                      totalPage: Math.ceil(
                        action.data.length / 5
                      ),
                    },
                    error: null,
                  };
                  console.log(__state)

                  //s1
                  console.log('reducer site', action.data)
                  __state = {...state}
                  __state.data = action.data
                  let _data1 = [];
                 
                 
                  console.log(action.data.length)
                    
                    for (let i1 = 0; i1 < action.data.length; i1++) {

                      if (i1 < 5) {
                        _data1.push(action.data[i1]);
                      }
                    }
                  
                  console.log(_data1)
  
                  __state = {
                      ...state,
                      data: action.data,
                      dataList1: _data1,
                      pagination1: {
                        itemPerPage: 5,
                        currentPage: 1,
                        totalPage: Math.ceil(
                          action.data.length / 5
                        ),
                      },
                      error: null,
                    };
                    console.log(__state)
             //s2
             console.log('reducer site', action.data)
             __state = {...state}
             __state.data = action.data
             let _data2 = [];
            
            
             console.log(action.data.length)
               
               for (let i2 = 0; i2 < action.data.length; i2++) {

                 if (i2 < 5) {
                   _data2.push(action.data[i2]);
                 }
               }
             
             console.log(_data2)

             __state = {
                 ...state,
                 data: action.data,
                 dataList2: _data2,
                 pagination2: {
                   itemPerPage: 5,
                   currentPage: 1,
                   totalPage: Math.ceil(
                     action.data.length / 5
                   ),
                 },
                 error: null,
               };
               console.log(__state)
                    
            return __state
            
            case CONSTANTS.SITE.LOGS_COUNT_CHANGE:
                __state = { ...state }
                __state.pagination.itemPerPage = action.result
                __state.pagination.currentPage = 1
                __state.pagination.totalPage = Math.ceil(__state.data.length / action.result)
        
                __state.dataList = []
                for (let i = 0; i < __state.data.length; i++) {
                    if (i < action.result) {
                        __state.dataList.push(__state.data[i])
                    }
                }
        
                state = {
                    ...__state
                };

                //s1
                __state = { ...state }
                __state.pagination1.itemPerPage = action.result
                __state.pagination1.currentPage = 1
                __state.pagination1.totalPage = Math.ceil(__state.data.length / action.result)
        
                __state.dataList1 = []
                for (let i1 = 0; i1 < __state.data.length; i1++) {
                    if (i1 < action.result) {
                        __state.dataList1.push(__state.data[i1])
                    }
                }
        
                state = {
                    ...__state
                };
                     //s2
                     __state = { ...state }
                     __state.pagination2.itemPerPage = action.result
                     __state.pagination2.currentPage = 1
                     __state.pagination2.totalPage = Math.ceil(__state.data.length / action.result)
             
                     __state.dataList2 = []
                     for (let i2 = 0; i2 < __state.data.length; i2++) {
                         if (i2 < action.result) {
                             __state.dataList2.push(__state.data[i2])
                         }
                     }
             
                     state = {
                         ...__state
                     };
                return state;
                

                case CONSTANTS.SITE.LOGS_PAGE_CHANGE:
                    __state = { ...state }
                    __state.pagination.currentPage = action.result
              
                    __state.dataList = []
                    let _j = 0
                    for (let i = ((action.result - 1) * state.pagination.itemPerPage); i < __state.data.length; i++) {
              
                      if (_j < state.pagination.itemPerPage) {
                        __state.dataList.push(__state.data[i])
                        _j++
              
                      }
                    }
              
                    state = {
                      ...__state
                    };

                    //s1
                    __state = { ...state }
                    __state.pagination1.currentPage = action.result
              
                    __state.dataList1 = []
                    let _j1 = 0
                    for (let i1 = ((action.result - 1) * state.pagination1.itemPerPage); i1 < __state.data.length; i1++) {
              
                      if (_j1 < state.pagination1.itemPerPage) {
                        __state.dataList1.push(__state.data[i1])
                        _j1++
              
                      }
                    }
              
                    state = {
                      ...__state
                    };

                    //S2
                    __state = { ...state }
                    __state.pagination2.currentPage = action.result
              
                    __state.dataList1 = []
                    let _j2 = 0
                    for (let i2 = ((action.result - 1) * state.pagination2.itemPerPage); i2 < __state.data.length; i2++) {
              
                      if (_j2 < state.pagination2.itemPerPage) {
                        __state.dataList2.push(__state.data[i2])
                        _j2++
              
                      }
                    }
              
                    state = {
                      ...__state
                    };
                    return state;
                    case CONSTANTS.SITE.SITE_SEARCH:
                      __state = { ...state }
                      __state.dataList = []
                      __state.dataSearch = []
                
                      __state.pagination.currentPage = 1
                      __state.pagination.searchValue = action.result
                      state.data.forEach(element => {
                        console.log(element)
                        if (element.site.name.includes(action.result)) {
                          __state.dataSearch.push(element)
                        }
                      });
                
                      __state.pagination.totalPage = Math.ceil(__state.dataSearch.length / state.pagination.itemPerPage)
                
                      let statePage = 0
                      for (let i = 0; i < __state.dataSearch.length; i++) {
                        if (statePage < state.pagination.itemPerPage) {
                          __state.dataList.push(__state.dataSearch[i])
                          statePage++
                        }
                      }
                
                      state = {
                        ...__state
                      };
                      return state;           
        case CONSTANTS.SITE.LATEST_COMPANY_DATA_SUCCESS:
            console.log('reducer site', action.data)
                __state = {...state}
                __state.data = action.data
            return __state
        case CONSTANTS.CLEAR:
            return initState
        default:
            return state
    
  
  }
}