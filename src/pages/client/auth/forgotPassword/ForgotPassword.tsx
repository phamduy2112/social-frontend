import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import OtpInput from './OtpFormPass';
import ChangePassword from './ChanggPassword';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';
const ForgotPassword = () => {

  const [number,setNumber] = useState(1);

  const initialValues = {
    email: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Địa chỉ email không hợp lệ')
      .required('Email là bắt buộc'),
  });

  const handleSubmit = (values:any) => {
    console.log('Gửi mã OTP đến:', values.email);
    // Gửi mã OTP đến email
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-900">
     {
      number === 0 ? (
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
      ): <OtpInput/>
     }
    </div>
  );
};

export default ForgotPassword;