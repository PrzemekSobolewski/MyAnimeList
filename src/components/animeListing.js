import React, {useEffect, useState} from 'react';
import { Input, Button } from 'semantic-ui-react';
import {useSelector, useDispatch} from 'react-redux';
import * as actions from "../redux/actions/animeListAction";
import AnimeListingElement from "./animeListingElement";
import Pagination from "./pagination";

const AnimeListing = () => {
    const [paginationPage, setPaginationPage] = useState(1);
    const animeList = useSelector(state => state.animeList);
    const [query, setQuery] = useState(animeList.last_search);
    
    const dispatch = useDispatch();

    useEffect(() => {
        updateAnimeList();
    }, [paginationPage])

    useEffect(() => {
        if(query) {
            dispatch(actions.fetchAnimeListByQuery(query, paginationPage));
        } else {
            dispatch(actions.fetchAnimeList());
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(query) {
            dispatch(actions.fetchAnimeListByQuery(query, paginationPage));
        }else {
            dispatch(actions.fetchAnimeList());
        }
    }

    const updateAnimeList = () => {
        dispatch(actions.fetchAnimeListByQuery(query, paginationPage));
    }

    const getListItem = (anime_data, index) => {
        return <AnimeListingElement anime_data={anime_data} key={index}/>;
    }

    const getEmptyListInfo = () => {
        return (
            <div className="empty-list__info">
                Nie znaleziono żadnego anime
            </div>
        );
    }

    return (
        <div className="content">
            <form className="find-anime__form" onSubmit={handleSubmit}>
                <Input className="js-find-anime find-anime__form--input" placeholder='Podaj tytuł' value={query} onChange={e => setQuery(e.target.value)}/>
                <Button type="submit" className="find-anime__form--button">Szukaj</Button>
            </form>
            
            <div className="anime-list">
                {animeList.list_data.length > 0 ? animeList.list_data.map((item, index) => getListItem(item, index)) : getEmptyListInfo()}
            </div>
                {animeList.last_page > 1 ? <Pagination page={paginationPage} setPage={setPaginationPage} /> : ''}
        </div>
    )
}
export default AnimeListing;