export const filterProductsByCategory = (products, categoria) => {
  const filteredProcuts = products.filter(
    product => product.categoria === categoria
  );
  return filteredProcuts;
};
