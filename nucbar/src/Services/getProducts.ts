import { Products } from '../Interfaces/BDInterfaces';
import { makeRequest } from './makeRequest';

interface Return {
  products: Products;
}
export function getProductsByCategory(category: {}): Promise<Return> {
  const queryStrings = new URLSearchParams(category).toString();
  return makeRequest<Return>(`/products?${queryStrings}`);
}
