import React from 'react';
import ProductItem from './ProductItem';
import { Grid } from 'semantic-ui-react';
import { Product } from '../services/productService';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div>
      {products.length > 0 && (
        <>
          <h2 className='header-2'>ネコ一覧</h2>
            <Grid>
              <Grid.Row columns={4}>
              {products.map((product, index) => (
                <ProductItem key={product.id} index={index + 1} product={product} />
              ))}
              </Grid.Row>
            </Grid>
        </>
      )}
    </div>
  );
};

export default ProductList;
