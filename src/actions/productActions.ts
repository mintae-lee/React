/**
 * FETCH_PRODUCTS_REQUEST, 
 * FETCH_PRODUCTS_SUCCESS, 
 * FETCH_PRODUCTS_FAILURE
 * というアクションタイプとそれぞれのアクションクリエーターを定義します。
 * このファイルでは TypeScript の型システムを使用し、
 * アクションオブジェクトの構造と値を厳密に定義しています。
 */
import { Product } from '../services/productService';

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
