import { axiosWithAuth } from "../axios.config"
import { authApiEndpoint, getApiAction, getApiActionType } from "@/utils/getApi"
import { IPayloadForgotPassword, IPayloadLogin, IPayLoadRegister } from "../../types/auth.type"



export const registerApi =async (payload:IPayLoadRegister)=>{
    try {
    
       const authApi=await axiosWithAuth.post(`${authApiEndpoint}/register`, payload);
       return authApi?.data;

  
    } catch (error) {
            return error
    }
}
export const loginApi =async (payload:IPayloadLogin)=>{
    try {
    
        const authApi=await axiosWithAuth.post(`${authApiEndpoint}/login`, payload);
        return authApi?.data;
      

  
    } catch (error) {
            return error
    }
}

export const verifyEmail=async(payload:IPayloadForgotPassword)=>{
    try{
        const response=await  await axiosWithAuth.post('auth/verify-email',payload)
        return response.data;
    }catch(err){
        return err
    }
}
export const verifyOTP=async(payload:IPayloadForgotPassword)=>{
    try{
        const response= await axiosWithAuth.post('auth/verify-otp',payload)
        return response.data;
       
        
        ;
    }catch(err){
        return err
    }
}
export const changePasswordWithOutToken=async(payload:IPayloadForgotPassword)=>{
    try{
        const response= await axiosWithAuth.post('auth/change-password-no-token',payload);
        return response.data;
    }catch(err){
        return err
    }
}
