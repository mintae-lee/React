/**
 * 액션 객체를 받아와 새로운 상태를 반환하는 리듀서 함수를 정의합니다. 
 */
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  ProductActionTypes,
} from './productActions';

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
