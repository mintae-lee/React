import React from 'react';
import { Grid, Card, Image, Icon } from 'semantic-ui-react';
import { Favourite } from '../services/favouritesService';

interface FavouriteItemProps {
  index: number;
  favourite: Favourite;
}

const FavouriteItem: React.FC<FavouriteItemProps> = ({ index, favourite }) => {
  return (
    <Grid.Column>
      <Card style={
          { margin: "15px 0" }
        }>
      <Image 
        src={favourite.image?.url} 
        rounded 
        style={
          { width: "100%", 
            height: "200px",
            objectFit: "cover",
          }
        } />
        <Card.Content>
          <Card.Header>{favourite.id}</Card.Header>
          <Card.Meta>{favourite.image_id}</Card.Meta>
          <Card.Description>
          お気に入り猫ちゃん
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href={window.location.href}>
            <Icon name='user' />
            10
          </a>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};

export default FavouriteItem;
