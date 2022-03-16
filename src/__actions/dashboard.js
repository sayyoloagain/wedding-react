import { CONSTANTS, IRequest, SERVER } from '../api';

export const DashboardActions = {
    getLatestData
};

async function getLatestData( dispatch) {
    
    try {
        
        let result = await IRequest.GetQuery(SERVER.API.DeviceData.LatestData)
        // result["uid"] = uid
        console.log(result)
        // if(role == 'admin') {
            console.log('ok dah masuk constatnt')
            dispatch({ type: CONSTANTS.DASHBOARD.LATEST_DATA_SUCCESS, result: result})
            console.log('ok dah keluar constatnt')
        // }
        // else {
        //     dispatch({ type: CONSTANTS.DASHBOARD.LATEST_DATA_SUCCESS_MANAGER, result: result})
        // }
        
    } catch (error) {
        console.log(error)
    }
}