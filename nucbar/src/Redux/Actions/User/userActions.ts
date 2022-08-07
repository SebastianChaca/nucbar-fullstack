import { UserActionTypes, User } from './ActiontTpes';

export const startFetchingUser = () => ({
  type: UserActionTypes.START_FETCHING_USER,
});
export const setCurrentUser = (user: User, token: string) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: { user, token },
});

export const singOut = () => ({
  type: UserActionTypes.SIGN_OUT,
});

export const failUser = (error: string) => ({
  type: UserActionTypes.FAIL_USER,
  payload: error,
});
