/**
 * アクションオブジェクトを受け取り新しい状態を返すリデューサー関数を定義します。
 */
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  ProductActionTypes,
} from '../actions/productActions';

export interface ProductState {
  loading: boolean;
  products: any[];
  error: string;
}

const initialState: ProductState = {
  loading: false,
  products: [],
  error: '',
};

const productReducer = (
  state = initialState,
  action: ProductActionTypes,
): ProductState => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload,
        error: '',
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        loading: false,
        products: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
