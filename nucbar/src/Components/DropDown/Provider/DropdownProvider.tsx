import React, { createContext, useState, useEffect, useRef, ChangeEvent, MouseEvent } from 'react';
import { Context, Props, FixMeLater } from './interfaces';

export const DropDownContext = createContext({} as Context);
const { Provider } = DropDownContext;

const DropdownProvider = React.forwardRef(({ children }: Props, ref:FixMeLater) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (event : FixMeLater):void=> {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu

      if (open && ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [open]);
  const handleOpen = ():void => {
    setOpen(prevOpen => !prevOpen);
  };
  return <Provider value={{ open, handleOpen }}>{children}</Provider>;
});

export default DropdownProvider;
