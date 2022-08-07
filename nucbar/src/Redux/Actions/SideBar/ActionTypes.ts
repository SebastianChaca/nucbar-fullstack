export enum SidebarActionTypes {
  HANDLE_USER_SIDEBAR = 'HANDLE_USER_SIDEBAR',
}
interface handleUserSidebar {
  type: SidebarActionTypes.HANDLE_USER_SIDEBAR;
}
export type SidebarAction = handleUserSidebar;
