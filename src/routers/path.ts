// ----------------------------------------------------------------------

const ROOTS = {
  HOME: '/',
  DASHBOARD: '/dashboard',
};

export const paths = {
  home: ROOTS.HOME,

  login: `${ROOTS.HOME}login`,
  register: `${ROOTS.HOME}register`,
  forgotPassword: `${ROOTS.HOME}forgot-password`,
  postDetail: `${ROOTS.HOME}posts/:id`,

  notifications: `${ROOTS.HOME}notifications`,

  explore: `${ROOTS.HOME}/explore`,

  messages: `${ROOTS.HOME}/messages`,

  bookmarks: `${ROOTS.HOME}/bookmarks`,

  profile: `${ROOTS.HOME}/users/:id`,

  profileDetail: `${ROOTS.HOME}/user-detail`,
  myImage:`${ROOTS.HOME}/listImage`,
  myVideo:`${ROOTS.HOME}/listVideo`,
  listInfor:`${ROOTS.HOME}/myInfor`,
  myFriends:`${ROOTS.HOME}/listMyFriends`,

  settings: `${ROOTS.HOME}settings`,

  following: `${ROOTS.HOME}/following`,

  exploreDetail: `${ROOTS.HOME}/explore/:id`,


  // ----------------------------------------------------------------------
  // dashboard
  dashboard: ROOTS.DASHBOARD,
  manageComments: `${ROOTS.DASHBOARD}/manage-comments`,
  manageBlogs: `${ROOTS.DASHBOARD}/manage-blogs`,
  manageUsers: `${ROOTS.DASHBOARD}/manage-users`,
  manageReports: `${ROOTS.DASHBOARD}/manage-reports`,

};
