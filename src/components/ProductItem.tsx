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
    <tr>
      <td>{ product.id }</td>
      <td>{ product.name }</td>
      <td>{ product.price }</td>
    </tr>
  );
};

export default ProductItem;
