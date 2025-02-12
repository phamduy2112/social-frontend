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
export const loginApi =async (payload)=>{
    try {
    
       
       return await axiosWithAuth.post(`auth/login`, payload);

  
    } catch (error) {
            return error
    }
}

export const verifyEmail=async(payload)=>{
    try{
        return await axiosWithAuth.post('auth/verify-email',payload);
    }catch(err){
        return err
    }
}
export const verifyOTP=async(payload)=>{
    try{
        return await axiosWithAuth.post('auth/verify-otp',payload);
    }catch(err){
        return err
    }
}
export const changePasswordWithOutToken=async(payload)=>{
    try{
        return await axiosWithAuth.post('auth/change-password-no-token',payload);
    }catch(err){
        return err
    }
}
