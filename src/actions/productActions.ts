/**
 * FETCH_PRODUCTS_REQUEST, 
 * FETCH_PRODUCTS_SUCCESS, 
 * FETCH_PRODUCTS_FAILURE
 * 라는 액션 타입들과 각각의 액션 생성 함수들을 정의합니다. 
 * 이 파일에서는 TypeScript의 타입 시스템을 사용하여, 
 * 액션 객체들이 갖는 속성과 값을 엄격하게 정의하고 있습니다.
 */
import { Product } from './productService';

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

interface FetchProductsRequestAction {
  type: typeof FETCH_PRODUCTS_REQUEST;
}

interface FetchProductsSuccessAction {
  type: typeof FETCH_PRODUCTS_SUCCESS;
  payload: Product[];
}

interface FetchProductsFailureAction {
  type: typeof FETCH_PRODUCTS_FAILURE;
  payload: string;
}

export type ProductActionTypes =
  | FetchProductsRequestAction
  | FetchProductsSuccessAction
  | FetchProductsFailureAction;

export const fetchProductsRequest = (): ProductActionTypes => {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  };
};

export const fetchProductsSuccess = (products: Product[]): ProductActionTypes => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
  };
};

export const fetchProductsFailure = (error: string): ProductActionTypes => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
  };
};
