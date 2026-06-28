export function getAvailableBrands(products) {
  return [...new Set(products.map((product) => product.brand).filter(Boolean))];
}