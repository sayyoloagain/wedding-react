import { CONSTANTS, IRequest, SERVER,  } from "../api";

export const DataPlanActions = {
  retreiveData,
  registerMaxis,
  registerXox,
  updateMaxis,
  updateXox,
  updateXoxToMaxis,
  updateMaxisToXox,
  deleteMaxis,
  deleteXox
};

async function retreiveData(dispatch) {
  try {
    let result = await IRequest.GetQuery(SERVER.API.Fence.FenceList);
    dispatch({ type: CONSTANTS.FENCE.DATA, result: result})
  } catch (error) {
    console.log(error);
  }
}

async function registerMaxis(param) {
    console.log(param);
    try {
      let result = await IRequest.Post(SERVER.API.DataPlan.AddMaxis, param)
      Promise.resolve(result)
    } catch (error) {
      return Promise.reject(error)
    }
}

async function registerXox(param) {
      console.log(param);
      try {
        let result = await IRequest.Post(SERVER.API.DataPlan.AddXox, param)
        Promise.resolve(result)
        
      } catch (error) {
        
        return Promise.reject(error)
      }
  }

  async function updateMaxis(param) {
    try {  
      let result = await IRequest.Post(SERVER.API.DataPlan.UpdateMaxis, param);
      return Promise.resolve(result);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async function updateXox(param) {
    try {  
      let result = await IRequest.Post(SERVER.API.DataPlan.UpdateXox, param);
      return Promise.resolve(result);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async function updateMaxisToXox(param) {
    try {  
      let result = await IRequest.Post(SERVER.API.DataPlan.UpdateMaxisToXox, param);
      return Promise.resolve(result);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async function updateXoxToMaxis(param) {
    try {  
      let result = await IRequest.Post(SERVER.API.DataPlan.UpdateXoxToMaxis, param);
      return Promise.resolve(result);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async function deleteMaxis(id) {
    try {
      let result = await IRequest.Delete(SERVER.API.DataPlan.DeleteMaxis(id))
      Promise.resolve(result)
    } catch (error) {
      return Promise.reject(error)
    }
}
  async function deleteXox(id) {
    console.log(id);
    try {
      let result = await IRequest.Delete(SERVER.API.DataPlan.DeleteXox(id))
      Promise.resolve(result)
    } catch (error) {
      return Promise.reject(error)
    }
}