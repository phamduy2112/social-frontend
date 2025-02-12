import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import OtpInput from './OtpFormPass';
import ChangePassword from './ChanggPassword';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';
import { verifyEmail } from '@/service/auth/auth.service';
import { toast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/redux/hooks';
import { setEmail } from '@/redux/auth/Auth.slice';
const ForgotEmail = (props) => {
  const dispatch=useAppDispatch();
  


  const initialValues = {
    email: '',
  };
const navigate=useNavigate()
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Địa chỉ email không hợp lệ')
      .required('Email là bắt buộc'),
  });

  const handleSubmit =async  (values:any) => {
    const payload={
        email:values.email

    }
    dispatch(setEmail(payload))
    const resp:any=await verifyEmail(payload);
    toast({
           
                 description: resp?.data?.message,

                })
    if(resp.data.message=='Thành công') 
      { 
     
        props.handleSetNumber(1)             }
}

  return (
    
        <div className="bg-zinc-800 p-10 rounded-lg shadow-lg w-[30rem]">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">Quên Mật Khẩu</h2>
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
          <Button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-200"
            disabled={isSubmitting}
          >
            Gửi Mã OTP
          </Button>
        </Form>
      )}
    </Formik>

      </div>
    


  );
};

export default ForgotEmail;