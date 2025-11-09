/**
 * これらのファイルは React コンポーネントではないため .tsx 拡張子を使う必要はありません。
 * .ts 拡張子を利用すると TypeScript コンパイラがこのファイルを TypeScript と認識し、
 * 内容を型チェックしたうえでコンパイルします。
 * その結果、型まわりのエラーを事前に検出できます。
 */
import { catApiRequest } from '../api/catApiClient';

export interface FavouriteImage {
  id: string;
  url: string;
}

export interface Favourite {
  id: string;
  image_id: string;
  sub_id: string | null;
  created_at: string;
  image: FavouriteImage;
}

type FetchFavouritesParams = {
  limit?: number;
  order?: 'ASC' | 'DESC';
  sub_id?: string;
};

class FavouritesService {
  async fetchFavourites({
    limit = 20,
    order = 'DESC',
    sub_id,
  }: FetchFavouritesParams = {}): Promise<Favourite[]> {
    return catApiRequest<Favourite[]>('/favourites', {
      query: { limit, order, sub_id },
    });
  }
}

const favouritesServiceInstance = new FavouritesService();

export default favouritesServiceInstance;
