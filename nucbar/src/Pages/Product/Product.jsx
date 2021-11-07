import ProductDetail from '../../Components/ProductDetail/ProductDetail';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Product = () => {
  const { id } = useParams();
  const { products } = useSelector(state => state.products);
  const selectedProduct = products?.data?.products.find(p => p.id === id);

  return (
    <>
      <ProductDetail product={selectedProduct} />
    </>
  );
};

export default Product;
