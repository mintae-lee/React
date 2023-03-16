import React from 'react';
import { Table } from 'semantic-ui-react';

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
    <Table.Row>
      <Table.Cell>{ product.id }</Table.Cell>
      <Table.Cell>{ product.name }</Table.Cell>
      <Table.Cell>{ product.price.toLocaleString() } 円</Table.Cell>
    </Table.Row>
  );
};

export default ProductItem;
