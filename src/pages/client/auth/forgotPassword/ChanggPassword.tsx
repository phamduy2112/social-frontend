import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";
import { useAppSelector } from "@/redux/hooks";
import { changePasswordWithOutToken } from "@/service/auth/auth.service";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
const ChangePassword = () => {

  const email=useAppSelector((state)=>state.auth.email)
  const navigate=useNavigate();

  const initialValues = {
    password: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object({
    password: Yup.string()
    .required("Mật khẩu là bắt buộc"),
    confirmPassword: Yup.string()
    .required("Xác nhận mật khẩu là bắt buộc"),
  });
  const handleSubmit =async  (values) => {

    const payload={
      password:values.password,
      email,
    }
                const res=await changePasswordWithOutToken(payload)
    if(res){
      toast({
        description:"Đổi mật khẩu thành công"
      })
      navigate('/login')
    }
    
    
    
 

   
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-900">
      <div className="bg-zinc-800 p-10 rounded-lg shadow-lg w-[30rem]">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">
          Đổi Mật Khẩu
        </h2>

           <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label className="block text-[.95rem] font-medium text-gray-300 mb-2" htmlFor="email">Mật khẩu</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className='text-white w-[100%] px-4 py-[.5rem] rounded-sm mb-2 bg-zinc-700 border border-zinc-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50'
                  placeholder="Nhập email của bạn"
                />
                <ErrorMessage name="password" component="div" className="text-red-500  text-sm" />
              </div>
              <div className="mb-4">
                <label className="block text-[.95rem] font-medium text-gray-300 mb-2" htmlFor="email">Xác nhận mật khẩu</label>
                <Field
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className='text-white w-[100%] px-4 py-[.5rem] rounded-sm mb-2 bg-zinc-700 border border-zinc-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50'
                  placeholder="Nhập email của bạn"
                />
                <ErrorMessage name="confirmPassword" component="div" className="text-red-500  text-sm" />
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-200"
                disabled={isSubmitting}
              >Xác Nhận
              </Button>
            </Form>
          )}
        </Formik>

      
      </div>
    </div>
  );
};

export default ChangePassword;
