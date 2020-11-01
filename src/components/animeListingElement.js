import React from 'react';
import { Item } from 'semantic-ui-react';

const AnimeListingElement = (props) => {
    return (
        <Item className="anime-list__element">
            <Item.Image size='small' src={props.anime_data.image_url} />
  
            <Item.Content>
                <Item.Header as="h3">{props.anime_data.title}</Item.Header>
                <Item.Description>
                    <p>
                        Many people also have their own barometers for what makes a cute
                        dog.
                    </p>
                </Item.Description>
            </Item.Content>
      </Item>
    );
}

export default AnimeListingElement;