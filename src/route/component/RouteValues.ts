export type PathsType = {
    [key: string]: string; // Mỗi khóa đều có giá trị kiểu chuỗi
  };
  
export const Paths:PathsType = {
    Home: "/",
    Profile:"/profile",
    Friends:"/friends",
    MyFriends:"/my-friends",
    MyPhotos:"/my-photos",
    CreateAlbum:"/media/albums/create",
    SearchFriends:"/search-friends",
    login:"/auth/login",
    register:"/auth/register",
    forgotPassword:"/auth/forgotPassword"
  };  
