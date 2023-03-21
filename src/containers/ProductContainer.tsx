/**
 * ProductList 컴포넌트를 렌더링할 때 products 상태를 props로 전달합니다. 
 * 이렇게 함으로써 ProductList 컴포넌트는 ProductItem 컴포넌트를 
 * 반복적으로 렌더링하면서 products 데이터를 출력하게 됩니다.
 */
import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import productService, { Product } from '../services/productService';
import { Dimmer, Loader, Container, Header } from 'semantic-ui-react';


// ProductContainer 컴포넌트 정의
const ProductContainer: React.FC = () => {

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  /**
   * useEffect : React component가 마운트, 업데이트, 언마운트 될 때마다 특정 작업(Sied effect)을 
   *             실행하는 리액트 Hook
   * 비동기처리 가능
   * seEffect(function, deps)
   * function: 콜백
   * deps: 옵저버 등록할 배열변수. 배열안의 변수가 변경될때마다 콜백이 실행된다. [] 이면 마운트될때 한번만 실행.
   *      deps에는 배열이나 오브젝트가 들어가므로 매번 다른 주소로 할당되기때문에 변수 변경됐다고 인식하므로 주의!
   *      그래서 useMemo() 로 반환된 값을 deps 에 넣어서 대응하기도 한다.
   * 
   */
  useEffect(() => {
    const fetchData = async () => {
      const data = await productService.fetchProducts();
      setProducts(data);
      setLoading(false);
    };
    fetchData();
    // 언마운트 될때 클리어하고 싶은 내용을 return 에 기술
    // return () => {}
  }, []);

  return (
    <Container>
      <Header as='h1' className='header-1'>猫</Header>
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
