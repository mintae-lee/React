import React, { useEffect } from 'react';
import FavouriteList from '../components/FavouriteList';
import { Dimmer, Loader, Container, Message } from 'semantic-ui-react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchFavourites } from '../features/favourites/favouritesSlice';

const FavouritesContainer: React.FC = () => {

  const dispatch = useAppDispatch();
  const { items: favourites, status, error } = useAppSelector(
    (state) => state.favourites,
  );

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchFavourites());
    }
  }, [dispatch, status]);

  const isLoading = status === 'loading';
  const hasError = status === 'failed';

  return (
    <Container className='container'>
      <h1>お気に入り一覧</h1>
      {isLoading ? (
        <Dimmer active inverted>
          <Loader>Loading</Loader>
        </Dimmer>
      ) : hasError ? (
        <Message negative>
          <Message.Header>読み込みエラー</Message.Header>
          <p>{error}</p>
        </Message>
      ) : (
        <FavouriteList favourites={favourites} />
      )}
    </Container>
  );
};

export default FavouritesContainer;
