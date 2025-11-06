/**
 * これらのファイルは React コンポーネントではないため .tsx 拡張子を使う必要はありません。
 * .ts 拡張子を利用すると TypeScript コンパイラがこのファイルを TypeScript と認識し、
 * 内容を型チェックしたうえでコンパイルします。
 * その結果、型まわりのエラーを事前に検出できます。
 */

export interface Favourite {
  id: string;
  image_id: string;
  sub_id: number;
  created_at: number;
  image: {
    id: string;
    url: string;
  }
}

class FavouritesService {
  async fetchFavourites(): Promise<Favourite[]> {
    const params = {limit : "20", order : 'DESC', sub_id: '' };
    const query = new URLSearchParams(params);
    const url = `https://api.thecatapi.com/v1/favourites?${query}`;
    const header = {
      "x-api-key": "live_sGa4jTiaQae1IO9z1PA9QZ0FncJrDgKJOcdjy0lwArSj4JBwwM0ByGThEaW3uarR"
    }
    const response = await fetch(url, { headers: header, method: 'GET' });
    const data = await response.json();
    return data;
  }
}

const favouritesServiceInstance = new FavouritesService();

export default favouritesServiceInstance;
