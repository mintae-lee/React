import React from 'react';
import ProductItem from './ProductItem';
import { Table } from 'semantic-ui-react';

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
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Price </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {products.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ProductList;
