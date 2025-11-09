/**
 * これらのファイルは React コンポーネントではないため .tsx 拡張子を使う必要はありません。
 * .ts 拡張子を利用すると TypeScript コンパイラがこのファイルを TypeScript と認識し、
 * 内容を型チェックしたうえでコンパイルします。
 * その結果、型まわりのエラーを事前に検出できます。
 */
import { catApiRequest } from '../api/catApiClient';

export interface ProductBreed {
  id?: string;
  name?: string;
  temperament?: string;
  description?: string;
}

export interface Product {
  breeds: ProductBreed[];
  id: string;
  url: string;
  width: number;
  height: number;
}

class ProductService {
  async fetchProducts(limit = 15): Promise<Product[]> {
    return catApiRequest<Product[]>('/v1/images/search', {
      query: { limit },
    });
  }
}

const productServiceInstance = new ProductService();

export default productServiceInstance;
