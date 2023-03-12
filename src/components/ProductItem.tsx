import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <li>
      <strong>{product.name}</strong>
      <span>{product.price}</span>
    </li>
  );
};

export default ProductItem;
