import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import OtpInput from './OtpFormPass';
import ChangePassword from './ChanggPassword';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';
import ForgotEmail from '@/components/form/ForgotEmail';
const ForgotPassword = () => {

  const [number,setNumber] = useState(0);

  const handleSetNumber=(number:number)=>{
    setNumber(number)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-900">
     {
      number === 0 ? (
      <ForgotEmail handleSetNumber={handleSetNumber}/>
      ): number===1? (
        <OtpInput/>
      ):(<ChangePassword/>)
     }
    </div>
  );
};

export default ForgotPassword;