import React, { createContext, useState, useEffect, useRef } from 'react';

export const DropDownContext = createContext({});
const { Provider } = DropDownContext;
const DropdownProvider = React.forwardRef(({ children }, ref) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu

      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [open]);
  const handleOpen = () => {
    setOpen(prevOpen => !prevOpen);
  };
  return <Provider value={{ open, setOpen, handleOpen }}>{children}</Provider>;
});

export default DropdownProvider;
