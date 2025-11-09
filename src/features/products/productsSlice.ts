import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import productService, { Product } from '../../services/productService';

type RequestStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

export interface ProductsState {
  items: Product[];
  status: RequestStatus;
  error?: string;
  lastFetchedAt?: string;
}

const initialState: ProductsState = {
  items: [],
  status: 'idle',
};

type FetchProductsArgs = {
  limit?: number;
};

export const fetchProducts = createAsyncThunk<
  Product[],
  FetchProductsArgs | undefined,
  { rejectValue: string }
>('products/fetchProducts', async (args, { rejectWithValue }) => {
  try {
    const limit = args?.limit ?? 15;
    return await productService.fetchProducts(limit);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Failed to load products';
    return rejectWithValue(message);
  }
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    resetProductsState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
        state.error = undefined;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.status = 'succeeded';
          state.items = action.payload;
          state.lastFetchedAt = new Date().toISOString();
        },
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ?? action.error.message ?? 'Unknown error';
        state.items = [];
      });
  },
});

export const { resetProductsState } = productsSlice.actions;

export default productsSlice.reducer;
