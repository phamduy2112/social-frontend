import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../layout/MainLayout'
import Home from "@/pages/client/home/Home";
import Profile from "@/pages/client/profile/Profile";
import { Paths } from "./component/RouteValues";
import AddFriend from "@/pages/client/AddFriend/AddFritend";
import MyFriends from "@/pages/client/profile/component/MyFriends";
import MyProfile from "@/pages/client/profile/component/MyProfile";
import MyPhotos from "@/pages/client/profile/component/MyImage";
import SearchFriends from "@/pages/client/searchFriends/SearchFriends";
import Login from "@/pages/client/auth/Login";
import SignupForm from "@/pages/client/auth/Sign";
import ForgotPassword from "@/pages/client/auth/forgotPassword/ForgotPassword";
import CreateAlbum from "@/pages/client/profile/component/CreateAlbum";

export const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
       
      ]
    },
    {
      element: <Profile />,
      children:[
        {
          path: Paths.Profile,
          element:<MyProfile/>

        },
        {
          path: Paths.MyFriends,
          element: <MyFriends />,
        },
        {
          path: Paths.MyPhotos,
          element: <MyPhotos />,
        },
      ]
    },
    {
      path: Paths.Friends,
      element: <AddFriend />,
    },
 
    {
      path: Paths.SearchFriends,
      element: <SearchFriends />,
    },
 
    {
      path: Paths.login,
      element: <Login />,
    },
    {
      path: Paths.register,
      element: <SignupForm />,
    },
    {
      path:Paths.forgotPassword,
      element:<ForgotPassword/>
    },
    {
      path:Paths.CreateAlbum,
      element:<CreateAlbum/>
    }
 
    
  ]);