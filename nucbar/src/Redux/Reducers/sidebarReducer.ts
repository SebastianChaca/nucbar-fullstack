import {
  SidebarAction,
  SidebarActionTypes,
} from '../Actions/SideBar/ActionTypes';
interface State {
  userSidebar: boolean;
}
const INITIAL_STATE = {
  userSidebar: false,
};

const userReducer = (state: State = INITIAL_STATE, action: SidebarAction) => {
  switch (action.type) {
    case SidebarActionTypes.HANDLE_USER_SIDEBAR:
      return { ...state, userSidebar: !state.userSidebar };
    default:
      return state;
  }
};

export default userReducer;
