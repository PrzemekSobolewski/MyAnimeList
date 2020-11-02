export const GET_LIST = 'GET_LIST';

export const getAnimeList = (response) => {
    return {
        type: GET_LIST,
        list_data: response
    };
}

export const fetchAnimeList = () => async dispatch => {
    await fetch('https://api.jikan.moe/v3/search/anime?order_by=score')
    .then(response => response.json())
    .then(json => {
        console.log(json);
        dispatch(getAnimeList(json.results));
    })
    .catch(err => console.log(err));
}
export const fetchAnimeListByQuery = (query) => async dispatch => {
    await fetch('https://api.jikan.moe/v3/search/anime?q=' + `${query}`)
    .then(response => response.json())
    .then(json => {
        console.log(json);
        dispatch(getAnimeList(json.results));
    })
    .catch(err => console.log(err));
}