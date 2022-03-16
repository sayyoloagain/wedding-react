import { CONSTANTS, IRequest, SERVER } from '../api';

export const TourActions = {
    getLatestData,
    saveAddedTimetableData,
    deleteTimetableData
};

async function getLatestData(dispatch) {
    try {
        let result = await IRequest.Get(SERVER.API.TourTimetable.LatestData)
        dispatch({ type: CONSTANTS.TOURING.LATEST_DATA_SUCCESS, data: result})
        
    } catch (error) {
        console.log(error)
    }
}

async function saveAddedTimetableData(param) {
    try {  
      let result = await IRequest.Post(SERVER.API.TourTimetable.AddTimetableData, param);
      return Promise.resolve(result);
    } catch (error) {
      return Promise.reject(error);
    }
}

async function deleteTimetableData(id) {
  console.log(id);
    try {  
      let result = await IRequest.Delete(SERVER.API.TourTimetable.deleteTimetableData(id));
      return Promise.resolve(result);
    } catch (error) {
      return Promise.reject(error);
    }
}