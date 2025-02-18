import { axiosWithAuth } from "../axios.config";

export const createBlog = async (payload: any): Promise<any> => {
  try {

       const authApi=await axiosWithAuth.post(`friends/add-friend/${payload.friendId}`);
       return authApi?.data;

  
    } catch (error) {
            return error
    }
};

export const getBlogByUserId = async (userId:number): Promise<any> => {
  try {
  
      const authApi=await axiosWithAuth.get(`friend/get-friend/${userId}`);
      return authApi?.data;
    

  
  } catch (error) {
          return error
  }
};
export const deleteBlogById = async (idFriend:number): Promise<any> => {
    try {
    
         const authApi=await axiosWithAuth.delete(`friend/delete-friend/${idFriend}`);
         return authApi?.data;
    
    
        } catch (error) {
                return error
        }
}