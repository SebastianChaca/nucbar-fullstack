export enum UserActionTypes {
  SET_CURRENT_USER = 'SET_CURRENT_USER',
  START_FETCHING_USER = 'START_FETCHING_USER',
  SIGN_OUT = 'SIGN_OUT',
  FINISH_USER = 'FINISH_USER',
  FAIL_USER = 'FAIL_USER',
}

export interface User {
  email: string;
  password: string;
  role: string;
  passwordChangeAt: Date;
  passwordResetToken: string;
  passwordResetExpires: Date;
  name: string;
  lastName: string;
  avatarImg: string;
  createdAt: Date;
  active: boolean;
  isAdmin: boolean;
}

interface fetchUser {
  type: UserActionTypes.SET_CURRENT_USER;
  payload: { user: User; token: string };
}

interface startUser {
  type: UserActionTypes.START_FETCHING_USER;
}

interface signOut {
  type: UserActionTypes.SIGN_OUT;
}

interface finishUSer {
  type: UserActionTypes.FINISH_USER;
}

interface failUSer {
  type: UserActionTypes.FAIL_USER;
  payload: string;
}

export type UserActions =
  | fetchUser
  | startUser
  | signOut
  | finishUSer
  | failUSer;
