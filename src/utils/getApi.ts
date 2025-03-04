import { getAction } from "./get-Action";


export enum getApiActionType {
    auth = 'auth',
    user='user',
    post = 'post',
    comment="comment",
    reaction="reaction",
    reply="reply",
    message="message",
    notification="notification",
  }

export const getApiAction = (action: getApiActionType): string => {
  switch (action) {
    case getApiActionType.auth:
      return 'auth';
    
    case getApiActionType.user:
      return 'user';
    
    case getApiActionType.post:
      return 'post';
    case getApiActionType.comment:
      return 'comments';
    case getApiActionType.reaction:
      return 'reaction';
    case getApiActionType.reply:  
      return 'reply';
    case getApiActionType.message:
      return 'message';
    case getApiActionType.notification:
      return 'notification';
    default:
      return '';
  }
};

export const authApiEndpoint=getApiAction(getApiActionType.auth);

export const userApi=getApiAction(getApiActionType.user);