import { useState, useEffect } from 'react';
import CartTotal from '../../Components/CartCard/CartTotal';
import CartTotalFixed from '../../Components/CartCard/CartTotalFixed';
import { useSelector, useDispatch } from 'react-redux';
import { GoHome } from '../../Components/Shared/SharedComponents';
import { getTotals } from '../../Redux/Actions/cartActions';
import { Flex, Text, Box } from '@chakra-ui/react';

const Totals = () => {
  const [heigth, setHeight] = useState();
  const { totals, cartItems } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setHeight(window.pageYOffset);
    });
    return () => window.removeEventListener('scroll', () => {});
  });

  if (totals?.quantity <= 0) {
    return (
      <Flex w="100%" p="30px" justifyContent="center">
        <Box textAlign="center">
          <Text textStyle="title">No hay productos en tu lista</Text>
          <GoHome />
        </Box>
      </Flex>
    );
  }
  return (
    <>
      <CartTotal total={totals?.total} />
      {cartItems.length > 2 && heigth <= cartItems.length * 100 && (
        <CartTotalFixed total={totals?.total} />
      )}
    </>
  );
};

export default Totals;
