/**
 * 이 파일들은 React 컴포넌트가 아니기 때문에 .tsx 확장자를 사용하지 않아도 됩니다.
 * .ts 파일 확장자를 사용하면 
 * TypeScript 컴파일러가 해당 파일이 TypeScript 파일임을 인식하고, 
 * 파일의 내용을 타입 검사하고 컴파일할 수 있습니다. 
 * 그리고 이를 통해 타입 관련 오류를 사전에 검출할 수 있게 됩니다.
 */

export interface Product {
  id: number;
  name: string;
  price: number;
}

class ProductService {
  async fetchProducts(): Promise<Product[]> {
    const response = await fetch('https://myapi.com/products');
    const data = await response.json();
    return data;
  }
}

export default new ProductService();
