export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const START_FETCHING_USER = 'START_FETCHING_USER';

export const startFetchingUser = () => ({
  type: START_FETCHING_USER,
});
export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user,
});
