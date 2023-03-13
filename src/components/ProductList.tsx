import React from 'react';
import ProductItem from './ProductItem';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className='container'>
      <h2 className='header-2'>Products</h2>
      <table className='border-table'>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </table>
    </div>
  );
};

export default ProductList;
