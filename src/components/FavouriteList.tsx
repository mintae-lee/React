import React from 'react';
import FavouriteItem from './FavouriteItem';
import { Grid } from 'semantic-ui-react';
import { Favourite } from '../services/favouritesService';

interface FavouriteListProps {
  favourites: Favourite[];
}

const FavouriteList: React.FC<FavouriteListProps> = ({ favourites }) => {
  return (
    <div>
      {favourites.length > 0 && (
        <>
          <h2 className='header-2'>お気に入り一覧</h2>
            <Grid>
              <Grid.Row columns={4}>
              {favourites.map((favourite, index) => (
                <FavouriteItem key={favourite.id} index={index + 1} favourite={favourite} />
              ))}
              </Grid.Row>
            </Grid>
        </>
      )}
    </div>
  );
};

export default FavouriteList;
