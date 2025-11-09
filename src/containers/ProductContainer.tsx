/**
 * ProductList コンポーネントを描画する際に products ステートを props として渡します。
 * これにより ProductList は ProductItem を繰り返しレンダリングしながら products のデータを表示します。
 */
import React, { useEffect } from 'react';
import ProductList from '../components/ProductList';
import { Dimmer, Loader, Container, Message } from 'semantic-ui-react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchProducts } from '../features/products/productsSlice';


// ProductContainer コンポーネント定義
const ProductContainer: React.FC = () => {

  const dispatch = useAppDispatch();
  const { items: products, status, error } = useAppSelector(
    (state) => state.products,
  );

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  const isLoading = status === 'loading';
  const hasError = status === 'failed';

  return (
    <Container>
      <h2 className='header-2'>猫一覧</h2>
      {isLoading ? (
        <Dimmer active inverted>
          <Loader>Loading</Loader>
        </Dimmer>
      ) : hasError ? (
        <Message negative>
          <Message.Header>読み込みエラー</Message.Header>
          <p>{error}</p>
        </Message>
      ) : (
        <ProductList products={products} />
      )}
    </Container>
  );
};

export default ProductContainer;
