
// /get-user-by-id

import { getApiAction } from "@/utils/getApi";
import { axiosWithAuth } from "../axios.config";
import { TPayloadUser } from "@/types/user.type";

export const getUserApi =async ()=>{
    try {
    //    const auth= getApiAction(getApiActionType.auth)
    const response=await axiosWithAuth.get(`user/get-user-by-id`);
    return response.data;
       

  
    } catch (error) {
            return error
    }
}

export const updateUserApi=async(payload:TPayloadUser)=>{
    try {
        const response=await axiosWithAuth.put(`user/update-user`,payload);
        return response.data;
    } catch (error) {
        return error
    }
}

export const uploadImage = (file:string) => {
    return axiosWithAuth("/upload-img", {
      headers: {
        "Content-Type": "multipart/form-data", // Đảm bảo gửi đúng loại dữ liệu
      },
      method: "post",
      data: file,
    });
  };