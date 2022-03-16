import { CONSTANTS, IRequest, SERVER } from '../api';

export const SiteActions = {
    getLatestData,
    getAllData,
    retreiveData,
    registerDevice,
    updateDevice,
    getLatestCompanyData,
    getSite
};

async function getLatestData(dispatch) {
    // console.log('dispatch site', result);
    try {
        let result = await IRequest.Get(SERVER.API.Sites.LatestData)
        console.log('getlatestdata site',result);
        dispatch({ type: CONSTANTS.SITE.LATEST_DATA_SUCCESS, data: result})
        
    } catch (error) {
        console.log(error)
    }
}
async function getSite(dispatch) {
    // console.log('dispatch site', result);
    try {
        let result = await IRequest.Get(SERVER.API.Sites.ListOfSite)
        console.log('getSiteTimetable',result);
        dispatch({ type: CONSTANTS.SITE.LATEST_DATA_SUCCESS, data: result})
        
    } catch (error) {
        console.log(error)
    }
}

async function getAllData(dispatch) {
    // console.log('dispatch site', result);
    try {
        let result = await IRequest.Get(SERVER.API.Sites.getAllData)
        console.log('getlatestdata site',result);
        dispatch({ type: CONSTANTS.SITE.LATEST_DATA_SUCCESS, data: result})
        
    } catch (error) {
        console.log(error)
    }
}

async function getLatestCompanyData(dispatch) {
    try {
        let result2 = await IRequest.Get(SERVER.API.Sites.LatestCompanyData)
        console.log('getlatestdata site',result2);
        dispatch({ type: CONSTANTS.SITE.LATEST_COMPANY_DATA_SUCCESS, data: result2})
        
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