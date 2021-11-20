import { useState, useRef, useEffect } from 'react';
import { useOutsideClick } from '@chakra-ui/react';

const useDropDown = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useOutsideClick({
    ref: ref,
    handler: () => setOpen(false),
  });
  const handleOpen = () => {
    setOpen(!open);
  };
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
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [open]);
  return { open, ref, handleOpen };
};

export default useDropDown;
