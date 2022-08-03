export interface MenuItemProps {
    children: JSX.Element,
    onClick():void | null,
    bg:string,
    to:string
}

export interface MenuItemGroupProps{
    children: JSX.Element,
    w:string
}

export interface MenuButtonProps{
    onClick(): void,
    children: JSX.Element,
    color:string
  
  }
   

export type MotionVariantTypes={
    [key: string]:  {},
}

