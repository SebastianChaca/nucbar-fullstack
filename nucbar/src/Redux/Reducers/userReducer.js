import { SET_CURRENT_USER, START_FETCHING_USER } from '../Actions/userActions';

const INITIAL_STATE = {
  currentUser: null,
  loading: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_FETCHING_USER:
      return { ...state, loading: true };
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload.user,
        token: action.payload.jwt,
        loading: false,
      };

    default:
      return state;
  }
};

export default userReducer;
