
import { Button } from '@chakra-ui/react';
import { AiOutlineHeart } from 'react-icons/ai';
import useListContext from './Context/useListContext';
const LikeButton = () => {
  const { show } = useListContext();
  return (
    <>
      {show && (
        <Button
          position="absolute"
          m="5px"
          color="nucba.primary"
          _hover={{ color: 'nucba.third' }}
          bg="transparent"
          top="5px"
          left="92%"
        >
          <AiOutlineHeart />
        </Button>
      )}
    </>
  );
};

export default LikeButton;
