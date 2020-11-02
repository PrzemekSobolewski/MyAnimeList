export const GET_LIST = 'GET_LIST';
export const SET_LAST_SEARCH = 'SET_LAST_SEARCH';

export const getAnimeList = (response) => {
    return {
        type: GET_LIST,
        list_data: response.results,
        last_page: response.last_page,
    };
}

export const setLastSearch = (query) => {
    return {
        type: SET_LAST_SEARCH,
        last_search: query
    };
}

export const fetchAnimeList = () => async dispatch => {
    await fetch('https://api.jikan.moe/v3/search/anime?order_by=score')
        .then(response => response.json())
        .then(json => {
            dispatch(getAnimeList(json));
        })
        .catch(err => console.log(err));
}

export const fetchAnimeListByQuery = (query, page) => async dispatch => {
    await fetch('https://api.jikan.moe/v3/search/anime?q=' + `${query}` + '&page=' + `${page}`)
        .then(response => response.json())
        .then(json => {
            dispatch(getAnimeList(json));
            dispatch(setLastSearch(query));

        })
        .catch(err => console.log(err));
}