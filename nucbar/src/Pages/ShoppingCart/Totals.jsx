import { useState, useEffect } from 'react';
import CartTotal from '../../Components/CartCard/CartTotal';
import CartTotalFixed from '../../Components/CartCard/CartTotalFixed';
import { useSelector, useDispatch } from 'react-redux';
import { getTotals } from '../../Redux/Actions/cartActions';

const Totals = () => {
  const [heigth, setHeight] = useState();
  const { total, cartItems } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setHeight(window.pageYOffset);
    });
    return () => window.removeEventListener('scroll', () => {});
  });

  return (
    <>
      <CartTotal total={total?.total} />
      {cartItems.length > 2 && heigth <= cartItems.length * 100 && (
        <CartTotalFixed total={total?.total} />
      )}
    </>
  );
};

export default Totals;
