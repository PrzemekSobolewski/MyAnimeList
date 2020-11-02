import React from 'react';
import {Item} from 'semantic-ui-react';
import {Link} from "react-router-dom";

const AnimeListingElement = (props) => {
    return (
        <Link to={`/anime/${props.anime_data.mal_id}`}>
            <Item className="anime-list__element">
                <Item.Image className="anime-list__image" src={props.anime_data.image_url} />
                <Item.Content>
                    <Item.Header as="h2">{props.anime_data.title}</Item.Header>
                    <Item.Description>
                        <p>
                            {props.anime_data.synopsis}
                        </p>
                    </Item.Description>
                </Item.Content>
            </Item>
        </Link>
    );
}

export default AnimeListingElement;