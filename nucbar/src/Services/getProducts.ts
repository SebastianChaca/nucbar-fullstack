import { makeRequest } from './makeRequest';

export function getProductsByCategory(category: {}) {
  const queryStrings = new URLSearchParams(category).toString();
  return makeRequest(`/products?${queryStrings}`);
}
