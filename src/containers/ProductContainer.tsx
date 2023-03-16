/**
 * ProductList 컴포넌트를 렌더링할 때 products 상태를 props로 전달합니다. 
 * 이렇게 함으로써 ProductList 컴포넌트는 ProductItem 컴포넌트를 
 * 반복적으로 렌더링하면서 products 데이터를 출력하게 됩니다.
 */
import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';

interface Product {
  id: number;
  name: string;
  price: number;
}

// ProductContainer 컴포넌트 정의
const ProductContainer: React.FC = () => {
  // useState를 사용하여 products 상태를 관리
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // useEffect를 사용하여 컴포넌트가 마운트되었을 때 
    // axios 로 API 데이터를 불러와 products 상태를 업데이트를 여기서 하기
    
    const mockData = [
      { id: 1, name: 'Adaptor', price: 20000 },
      { id: 2, name: 'Pencil', price: 700 },
      { id: 3, name: 'Paper', price: 1080 },
      { id: 4, name: 'Desk', price: 30000 },
      { id: 5, name: 'Chair', price: 20000 }
    ]
    setProducts(mockData)
  }, []);
  
  console.log("products: ", products);

  return (
    <div>
      <h1>My Products</h1>
      <ProductList products={products} />
    </div>
  );
};

export default ProductContainer;
