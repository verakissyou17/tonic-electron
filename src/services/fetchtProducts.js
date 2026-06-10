export async function fetchProducts() {
  const res = await fetch(
    `${import.meta.env.BASE_URL}products.json`
  );

  return res.json();
}