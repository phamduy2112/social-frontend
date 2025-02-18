import { useAppSelector } from "@/redux/hooks";
import { Navigate } from "react-router-dom";

type PrivateRouteProps = {
    element: React.ReactNode;
  };
  
  const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
    const login = useAppSelector((state) => state.userReducer.login);
    
    if (login) {
      return <>{element}</>;
    }
    
    return <Navigate to="/dang-nhap" replace />;
  };
  const AuthRoute: React.FC<PrivateRouteProps> = ({ element }) => {
    const login = useAppSelector((state) => state.userReducer.login);
  
    if (login) {
      return <Navigate to="/" replace />; // Nếu đã đăng nhập, điều hướng về trang chủ
    }
  
    return <>{element}</>; // Nếu chưa đăng nhập, hiển thị trang đăng nhập
  };
//  const AdminRoute: React.FC<PrivateRouteProps> = ({ element }) => {
//     const { login, userDetail } = useAppSelector((state) => state.userReducer);
  
//     // Nếu chưa đăng nhập, chuyển hướng về trang đăng nhập
//     if (!login) {
//       return <Navigate to="/dang-nhap" replace />;
//     }
  
//     // Nếu đã đăng nhập nhưng không phải Admin, chuyển hướng về trang Client
//     if (userDetail?.user_role == 11) {
//       return <Navigate to="/" replace />;
//     }
  
//     // Nếu là Admin, hiển thị nội dung của trang Admin
//     return element;
//   };
  export { PrivateRoute,AuthRoute };