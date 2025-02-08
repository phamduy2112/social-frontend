import { SidebarRight } from '@/layouts/components';
import MainLayout from '@/layouts/main-layout';
import SidebySideLayout from '@/layouts/sbs-layout';
import ErrorPage from '@/pages/error/error-page';
import { Message } from '@/pages/message';
import Notifications from '@/pages/notifications/notifications';
import { PostDetail } from '@/pages/post-detail';
import Settings from '@/pages/settings/settings';
import { paths } from '@/routers/path';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { Bookmarks } from '@/pages/bookmarks';
import { persistStore } from 'redux-persist';

import { Following } from '@/pages/following';
import { ExploreDetail } from '@/pages/explore-detail';
import { Explore } from '@/pages/explore';
import { EditProfile } from '@/pages/edit-profile';
import Home from '@/pages/client/home/Home';
import MyProfile from '@/pages/client/profile/component/MyProfile';
import Profile from '@/pages/client/profile/Profile';
import Login from '@/pages/client/auth/Login';
import SignupForm from '@/pages/client/auth/Sign';
import ForgotPassword from '@/pages/client/auth/forgotPassword/ForgotPassword';

// ----------------------------------------------------------------------
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route path={paths.login} element={<Login />} />
      <Route path={paths.register} element={<SignupForm />} />
      <Route path={paths.forgotPassword} element={<ForgotPassword/>} />
      <Route path={paths.home} element={<MainLayout />}>
        {/*Pages with right sidebar  */}
        <Route element={<SidebySideLayout sideComponent={<SidebarRight />} />}>
          <Route index element={<Home />} />
          <Route path={paths.notifications} element={<Notifications />} />
          <Route path={paths.postDetail} element={<PostDetail />} />
          <Route   element={<Profile />} >
            <Route path={paths.profile} element={<MyProfile />} />
          </Route>
          <Route path={paths.profileDetail} element={<EditProfile />} />
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
    </Route>,
  ),
);


const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
