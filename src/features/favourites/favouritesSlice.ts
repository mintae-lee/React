import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import favouritesService, {
  Favourite,
} from '../../services/favouritesService';

type RequestStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

export interface FavouritesState {
  items: Favourite[];
  status: RequestStatus;
  error?: string;
  lastFetchedAt?: string;
}

const initialState: FavouritesState = {
  items: [],
  status: 'idle',
};

type FetchFavouritesArgs = {
  limit?: number;
  order?: 'ASC' | 'DESC';
  sub_id?: string;
};

export const fetchFavourites = createAsyncThunk<
  Favourite[],
  FetchFavouritesArgs | undefined,
  { rejectValue: string }
>('favourites/fetchFavourites', async (args, { rejectWithValue }) => {
  try {
    return await favouritesService.fetchFavourites({
      limit: args?.limit ?? 20,
      order: args?.order ?? 'DESC',
      sub_id: args?.sub_id,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Failed to load favourites';
    return rejectWithValue(message);
  }
});

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    resetFavouritesState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavourites.pending, (state) => {
        state.status = 'loading';
        state.error = undefined;
      })
      .addCase(
        fetchFavourites.fulfilled,
        (state, action: PayloadAction<Favourite[]>) => {
          state.status = 'succeeded';
          state.items = action.payload;
          state.lastFetchedAt = new Date().toISOString();
        },
      )
      .addCase(fetchFavourites.rejected, (state, action) => {
        state.status = 'failed';
        state.error =
          action.payload ?? action.error.message ?? 'Unknown error';
        state.items = [];
      });
  },
});

export const { resetFavouritesState } = favouritesSlice.actions;

export default favouritesSlice.reducer;
