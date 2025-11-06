/**
 * ProductList コンポーネントを描画する際に products ステートを props として渡します。
 * これにより ProductList は ProductItem を繰り返しレンダリングしながら products のデータを表示します。
 */
import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import productService, { Product } from '../services/productService';
import { Dimmer, Loader, Container } from 'semantic-ui-react';


// ProductContainer コンポーネント定義
const ProductContainer: React.FC = () => {

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  /**
   * useEffect: React コンポーネントがマウント・更新・アンマウントされるたびに
   *            特定の処理（副作用）を実行する Hook。非同期処理も可能。
   * useEffect(function, deps)
   * function: コールバック
   * deps: 監視対象を登録する配列。値が変わるたびにコールバックが走り、[] なら初回マウント時のみ実行。
   *       deps に配列やオブジェクトを渡すと毎回異なる参照になるため変更とみなされる点に注意。
   *       そのため useMemo() で返した値を deps に入れて制御することもある。
   */
  useEffect(() => {
    const fetchData = async () => {
      const data = await productService.fetchProducts();
      setProducts(data);
      setLoading(false);
    };
    fetchData();
    // アンマウント時にクリーンアップしたい処理は return で記述する
    // return () => {}
  }, []);

  return (
    <Container>
      <h2 className='header-2'>猫一覧</h2>
      {loading ? (
        <Dimmer active inverted>
          <Loader>Loading</Loader>
        </Dimmer>
      ) : (
        <ProductList products={products} />
      )}
    </Container>
  );
};

export default ProductContainer;
