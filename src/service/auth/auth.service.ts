import { URL_BACKEND } from "@/constant"
import { axiosWithAuth } from "../axios.config"
import { getApiAction, getApiActionType } from "@/utils/getApi"



export const registerApi =async (payload)=>{
    try {
       const auth= getApiAction(getApiActionType.auth)
       console.log(auth);
       
       return await axiosWithAuth.post(`auth/register`, payload);

  
    } catch (error) {
            return error
    }
}