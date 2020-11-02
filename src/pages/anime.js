import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Item} from 'semantic-ui-react';
import {useLocation} from "react-router-dom";
import * as actions from "../redux/actions/animeAction";

const Anime = (props) => {
    const [animeId, setAnimeId] = useState(props.match.params.id);
    const location = useLocation();
    const anime = useSelector(state => state.anime);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.fetchAnime(animeId));
    }, []);

    return (
        <Item>
            <Item.Image size='big' src={anime.anime_data.image_url} />

            <Item.Content>
                <Item.Header as="h2">{anime.anime_data.title}</Item.Header>
                <Item.Description>
                    <p>
                        {anime.anime_data.synopsis}
                    </p>
                </Item.Description>
            </Item.Content>
        </Item>
    );
}

export default Anime;