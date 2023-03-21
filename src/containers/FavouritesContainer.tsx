import React, { useEffect, useState } from 'react';
import FavouriteList from '../components/FavouriteList';
import favouritesService, { Favourite } from '../services/favouritesService';
import { Dimmer, Loader } from 'semantic-ui-react';

const FavouritesContainer: React.FC = () => {

  const [loading, setLoading] = useState(true);
  const [favourites, setProducts] = useState<Favourite[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await favouritesService.fetchFavourites();
      setProducts(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className='container'>
      <h1>お気に入り一覧</h1>
      {loading ? (
        <Dimmer active inverted>
          <Loader>Loading</Loader>
        </Dimmer>
      ) : (
        <FavouriteList favourites={favourites} />
      )}
    </div>
  );
};

export default FavouritesContainer;
