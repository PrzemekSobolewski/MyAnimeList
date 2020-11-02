import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Item} from 'semantic-ui-react';
import {useLocation, useHistory} from "react-router-dom";
import * as actions from "../redux/actions/animeAction";

const Anime = (props) => {
    const [animeId, setAnimeId] = useState(props.match.params.id);
    const location = useLocation();
    const history = useHistory();
    const anime = useSelector(state => state.anime);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.fetchAnime(animeId));
    }, []);

    const handleClick = () => {
        history.push("/search");
    }

    return (
        <React.Fragment>
            <div>
                <span className="go-back" onClick={handleClick}>{ '< Powrót' }</span>
            </div>
            <Item className="anime-info__container">
                <Item.Image className="anime-info__image" src={anime.anime_data.image_url} />
                <Item.Content className="anime-info__content">
                    <Item.Header as="h2">{anime.anime_data.title}</Item.Header>
                    <Item.Description>
                        <p>
                            {anime.anime_data.synopsis}
                        </p>
                    </Item.Description>
                </Item.Content>
            </Item>
        </React.Fragment>
    );
}

export default Anime;