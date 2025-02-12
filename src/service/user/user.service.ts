
// /get-user-by-id

import { axiosWithAuth } from "../axios.config";

export const getUserApi =async ()=>{
    try {
    //    const auth= getApiAction(getApiActionType.auth)
    
       
       return await axiosWithAuth.get(`user/get-user-by-id`);

  
    } catch (error) {
            return error
    }
}