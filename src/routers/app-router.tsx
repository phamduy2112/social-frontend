import { SidebarRight } from '@/layouts/components';
import MainLayout from '@/layouts/main-layout';
import SidebySideLayout from '@/layouts/sbs-layout';
import ErrorPage from '@/pages/client/error/error-page';
import { Message } from '@/pages/client/message';
import Notifications from '@/pages/client/notifications/notifications';
import Settings from '@/pages/client/settings/settings';
import { paths } from '@/routers/path';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';


import { Following } from '@/pages/client/following';
import { ExploreDetail } from '@/pages/client/explore-detail';
import { Explore } from '@/pages/client/explore';
import Home from '@/pages/client/home/Home';
import MyProfile from '@/pages/client/profile/component/MyProfile';
import Profile from '@/pages/client/profile/Profile';
import Login from '@/pages/client/auth/Login';
import SignupForm from '@/pages/client/auth/Sign';
import ForgotPassword from '@/pages/client/auth/forgotPassword/ForgotPassword';
import MyInfor from '@/pages/client/profile/component/MyInfor';
import MyFriends from '@/pages/client/profile/component/MyFriends';
import Dashboard from '@/layouts/Admin/Dashboard';
import { PostDetail } from '@/pages/client/post-detail';
import { Bookmarks } from '@/pages/client/bookmarks';
import Album from '@/pages/client/profile/component/MyAlbum';
import MyPhotos from '@/pages/client/profile/component/MyImage';

// ----------------------------------------------------------------------
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route path={paths.login} element={<Login />} />
      <Route path={paths.register} element={<SignupForm />} />
      <Route path={paths.forgotPassword} element={<ForgotPassword number={1}/>} />
      <Route path={paths.home} element={<MainLayout />}>
        {/*Pages with right sidebar  */}
        <Route element={<SidebySideLayout sideComponent={<SidebarRight />} />}>
          <Route index element={<Home />} />
          <Route path={paths.notifications} element={<Notifications />} />
          <Route path={paths.postDetail} element={<PostDetail />} />
          <Route   element={<Profile />} >
            <Route path={paths.profile} element={<MyProfile />} />
            <Route path={paths.profileDetail} element={<MyInfor />} />
            <Route path={paths.myFriends} element={<MyFriends />} />
            <Route path={paths.myImage} element={<MyPhotos />} />
          </Route>
         
          <Route path={paths.following} element={<Following />} />
          <Route path={paths.exploreDetail} element={<ExploreDetail />}></Route>
          <Route path={paths.explore} element={<Explore />} />
        </Route>
        {/*Pages without right sidebar */}
        <Route path={paths.settings} element={<Settings />} />
        <Route path={`${paths.messages}/*`} element={<Message />} />
        <Route path={`${paths.bookmarks}/*`} element={<Bookmarks />} />
      </Route>
      {/* <Route   element={<Profile />} >
            <Route path={paths.profile} element={<MyProfile />} />
          </Route> */}

          <Route path={paths.dashboard} element={<Dashboard />} />
    </Route>,
  ),
);


const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
