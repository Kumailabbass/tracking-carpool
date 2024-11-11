'use client'
import { useEffect, useState } from 'react';

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}: ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;
