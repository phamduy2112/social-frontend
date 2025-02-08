

export enum getApiActionType {
    auth = 'auth',
   
  }

export const getApiAction = (action: getApiActionType): string => {
  switch (action) {
    case getApiAction.auth:
      return 'auth';
    
    default:
      return '';
  }
};
