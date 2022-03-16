import { CONSTANTS, IRequest, SERVER } from '../api';

export const UsersActions = {
    getListUser,
    registerUser,
    updateUser,
    getProfile
};

async function getListUser(dispatch) {
    try {
        let result = await IRequest.GetQuery(SERVER.API.AppUser.ListManager)
        console.log('dah masuk dah')
        dispatch({ type: CONSTANTS.USER.LIST_SUCCESS, data: result })
        
    } catch (error) {
        console.log(error)
    }
}
async function getProfile(dispatch) {
    try {
        let result = await IRequest.Get(SERVER.API.AppUser.LatestData)
        console.log('getlatestdata user',result);
        dispatch({ type: CONSTANTS.USER.LATEST_DATA_SUCCESS, data: result})
        
    } catch (error) {
        console.log(error)
    }
}
async function registerUser(param) {
    console.log(param)
    try {
        let result = await IRequest.Post(SERVER.API.AppUser.RegisterManager, param)
        console.log("## Result", result);
        return Promise.resolve(result)
    } catch (error) {
        // console.log(error)
        return Promise.reject(error)
    }
}
async function updateUser(userid, param) {
    console.log('### id',userid)
    console.log(param)
    try {
        let result = await IRequest.Patch(SERVER.API.AppUser.UpdateById(userid), param)
        console.log("result",result)
        console.log(param)
        return Promise.resolve(result)
    } catch (error) {
        console.log('## irequest error',error)
        return Promise.reject(error)
    }
}
