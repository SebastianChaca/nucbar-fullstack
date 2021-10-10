import ProductDetail from '../../Components/ProductDetail/ProductDetail';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Product = () => {
  const { id } = useParams();
  const { products } = useSelector(state => state.products);
  const selectedProduct = products.find(p => p.id === id);

  return (
    <div>
      <ProductDetail product={selectedProduct} />
    </div>
  );
};

export default Product;
