async function fetchProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Failed to fetch data.");
  }

  return response.json();
}

async function fetchProduct(id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch product.");
  }

  return response.json();
}

export { fetchProducts, fetchProduct };
