import {
  User,
  UserActions,
  UserActionTypes,
} from '../Actions/User/ActiontTpes';
interface State {
  currentUser: User | null;
  loading: boolean;
  error: string | null;
  token: string | null;
}
const INITIAL_STATE = {
  currentUser: null,
  loading: false,
  error: null,
  token: null,
};

const userReducer = (state: State = INITIAL_STATE, action: UserActions) => {
  switch (action.type) {
    case UserActionTypes.START_FETCHING_USER:
      return { ...state, loading: true };
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload.user,
        token: action.payload.token,
        loading: false,
      };
    case UserActionTypes.SIGN_OUT:
      return { currentUser: null, loading: false };

    case UserActionTypes.FINISH_USER:
      return { ...state, loading: false };
    case UserActionTypes.FAIL_USER:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
