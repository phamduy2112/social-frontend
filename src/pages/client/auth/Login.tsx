import { Button } from '@/components/ui/button';

import { AiOutlineFacebook, AiOutlineGoogle } from 'react-icons/ai';
import {  useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';
import { loginApi } from '@/service/auth/auth.service';
import { toast } from '@/hooks/use-toast';
import { useAppDispatch } from '@/redux/hooks';
import { getUserDetailThunk, setLogin, setToken } from '@/redux/user/User.slice';
import { IPayloadLogin } from '@/types/auth.type';
const Login = () => {
    const initialValues:IPayloadLogin = {
      email: '',
      password:'',

    };
    const dispatch=useAppDispatch();

    const navigate = useNavigate();

    const validationSchema = Yup.object({
      email: Yup.string()
        .email('Địa chỉ email không hợp lệ')
        .required('Email là bắt buộc'),
      password: Yup.string()
       
        .required('Mật khẩu là bắt buộc'),
    });
  
    const handleSubmit = async (values:IPayloadLogin) => {
    
      const payload={
        email:values.email,
        password:values.password
      }
            const res=await loginApi(payload)
            toast({
        
              description: res?.message,
            })
            if(res?.message=="Thành công") {
              dispatch(setLogin(true))
              dispatch(setToken(res?.content.access_token))
              await dispatch(getUserDetailThunk())
              navigate('/')}

    };
    return (
      <div className="flex items-center justify-center min-h-screen bg-zinc-900">
        <div className="bg-zinc-800 p-10 rounded-lg shadow-lg w-[30rem]">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">Đăng Nhập</h2>
          
          <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label className="block text-[.95rem] font-medium text-gray-300 mb-2" htmlFor="email">Email</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className='text-white w-[100%] px-4 py-[.5rem] rounded-sm mb-2 bg-zinc-700 border border-zinc-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50'
                  placeholder="Nhập email của bạn"
                />
                <ErrorMessage name="email" component="div" className="text-red-500  text-sm" />
              </div>
              <div className="mb-4">
                <label className="block text-[.95rem] font-medium text-gray-300 mb-2" htmlFor="password">Mật khẩu</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className='text-white w-[100%] px-4 py-[.5rem] rounded-sm mb-2 bg-zinc-700 border border-zinc-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50'
                  placeholder="Nhập mật khẩu của bạn"
                />
                <ErrorMessage name="password" component="div" className="text-red-500  text-sm" />
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-200"
                disabled={isSubmitting}
              >
                Đăng nhập
              </Button>
            </Form>
          )}
        </Formik>
  
          <div className="flex items-center justify-between mt-4">
            <hr className="w-full border-gray-600" />
            <span className="text-gray-400 mx-2">Hoặc</span>
            <hr className="w-full border-gray-600" />
          </div>
  
          <div className="mt-4">
            <Button className="flex items-center justify-center w-full bg-red-500 text-white p-3 rounded-md hover:bg-red-600 transition duration-200 mb-2">
              <AiOutlineGoogle className="mr-2" /> Đăng Nhập với Google
            </Button>
            <Button className="flex items-center justify-center w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-200">
              <AiOutlineFacebook className="mr-2" /> Đăng Nhập với Facebook
            </Button>
          </div>
  
          <p className="mt-4 text-center text-sm text-gray-400">
            Bạn chưa có tài khoản? <a href="#" className="text-blue-500 hover:underline">Đăng ký</a>
          </p>
        </div>
      </div>
    );
  };
  export default Login;
