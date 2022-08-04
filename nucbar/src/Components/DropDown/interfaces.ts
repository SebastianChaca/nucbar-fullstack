export interface MenuItemProps {
  children: JSX.Element | JSX.Element[] | string;
  onClick(): void | null;
  bg?: string;
  to?: string;
}

export interface MenuItemGroupProps {
  children: JSX.Element | JSX.Element[] | string;
  w: string;
}

export interface MenuButtonProps {
  onClick?: () => void;
  children: JSX.Element | JSX.Element[] | string;
  color: string;
}

export type MotionVariantTypes = {
  [key: string]: {};
};
