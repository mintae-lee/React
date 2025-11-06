/**
 * これらのファイルは React コンポーネントではないため .tsx 拡張子を使う必要はありません。
 * .ts 拡張子を利用すると TypeScript コンパイラがこのファイルを TypeScript と認識し、
 * 内容を型チェックしたうえでコンパイルします。
 * その結果、型まわりのエラーを事前に検出できます。
 */

export interface Product {
  breeds: [];
  id: string;
  url: string;
  width: number;
  height: number;
}

class ProductService {
  async fetchProducts(): Promise<Product[]> {
    const params = {limit : "15"};
    const query = new URLSearchParams(params);
    const url = `https://api.thecatapi.com/v1/images/search?${query}`;
    const header = {
      "x-api-key": "live_sGa4jTiaQae1IO9z1PA9QZ0FncJrDgKJOcdjy0lwArSj4JBwwM0ByGThEaW3uarR"
    }
    const response = await fetch(url, { headers: header, method: 'GET' });
    const data = await response.json();
    return data;
  }
}

const productServiceInstance = new ProductService();

export default productServiceInstance;
