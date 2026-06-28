export const filterByBrand = (products, brand) => {
  return products.filter((product) =>
    product.brand.toLowerCase().split(/\s+/).includes(brand.toLowerCase()),
  );
};
