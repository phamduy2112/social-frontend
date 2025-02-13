

export enum getApiActionType {
    auth = 'auth',
    user='user',
   
  }

export const getApiAction = (action: getApiActionType): string => {
  switch (action) {
    case getApiActionType.auth:
      return 'auth';
    
    case getApiActionType.user:
      return 'user';
    
    default:
      return '';
  }
};
