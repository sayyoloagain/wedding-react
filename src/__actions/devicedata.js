import { CONSTANTS, IRequest, SERVER } from '../api';

export const DevicedataActions = {
    getLatestData,
    retreiveData,
    registerDevice,
    updateDevice,
};

// async function getLatestData(dispatch) {
//     try {
//         let result = await IRequest.GetQuery(SERVER.API.DeviceData.LATEST)
//         dispatch({ type: CONSTANTS.DEVICEDATA.LATEST_READING, data: result })
//     } catch (error) {
//         console.log(error)
//     }
// }

async function getLatestData( dispatch) {
    try {
        let result = await IRequest.GetQuery(SERVER.API.DeviceData.LatestData)
        console.log(result)
        // if(role == 'admin') {
            console.log('ok dah masuk constatnt')
            dispatch({ type: CONSTANTS.DASHBOARD.LATEST_DATA_SUCCESS, result: result})
        // }
        // else {
        //     dispatch({ type: CONSTANTS.DASHBOARD.LATEST_DATA_SUCCESS_MANAGER, result: result})
        // }
    } catch (error) {
        console.log(error)
    }
}

async function retreiveData( dispatch) {
    try {
        let result = await IRequest.GetQuery(SERVER.API.Device.DeviceList)
        console.log(result)
        // if(role == 'admin') {
            console.log('ok dah masuk constatnt')
            // dispatch({ type: CONSTANTS.DASHBOARD.LATEST_DATA_SUCCESS, result: result})
        // }
        // else {
        //     dispatch({ type: CONSTANTS.DASHBOARD.LATEST_DATA_SUCCESS_MANAGER, result: result})
        // }
    } catch (error) {
        console.log(error)
    }
}

async function registerDevice(param) {
    try {
        let result = await IRequest.Post(SERVER.API.AppUser.RegisterManager, param)
        return Promise.resolve(result)
    } catch (error) {
        // console.log(error)
        return Promise.reject(error)
    }
}

async function updateDevice(id,param) {
    console.log(id)
    console.log(param)
    try {
        let result = await IRequest.Post(SERVER.API.Device.UpdateById(id), param)
        console.log(result)
        console.log(param)
        return Promise.resolve(result)
    } catch (error) {
        // console.log(error)
        return Promise.reject(error)
    }
}