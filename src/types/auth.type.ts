export interface IPayLoadRegister  {
    email?: string;
    fullname?: string;
    password?: string;
    confirmPassword?: string;

  };
  export interface IPayloadLogin extends IPayLoadRegister{
    token?:string;
    
  };
  export interface IPayloadChangePassword{
    email:string;
    newPassword:string;
  }

  export interface IPayloadForgotPassword {
    email?:string;
    otp?:string;
    password?:string;
  }

  export interface authInitalState{
    email:string;
  }
  export interface LoginResponse {
    message: string;
    content: {
      access_token: string;
    };
  }