import React, {useEffect, useState} from 'react';
import { Input } from 'semantic-ui-react';
import {useSelector, useDispatch} from 'react-redux'
import * as actions from "../redux/actions/animeListAction";
import AnimeListingElement from "./animeListingElement";

const getListItem = (anime_data) => {
    return <AnimeListingElement anime_data={anime_data}/>;
}
const AnimeListing = () => {
    const [paginationPage, setPaginationPage] = useState(1);
    const animeList = useSelector(state => state.animeList);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.fetchAnimeListByTop(paginationPage));
    }, [])
    return (
        
        <div className="content">
            <Input placeholder='Podaj tytuł' />
            <div className="anime-list">
               {animeList.list_data.map((item, index) => getListItem(item))}
            </div>
        </div>
        
    )
}
export default AnimeListing;