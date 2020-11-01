export const GET_LIST = 'GET_LIST';
const PART_OF_URL = 'https://api.jikan.moe/v3/top/anime/';

export const getAnimeList = (response) => {
    console.log(response);
    return {
        type: GET_LIST,
        list_data: response
    };
}

export const fetchAnimeListByTop = (page) => async dispatch => {
    await fetch(PART_OF_URL + `${page}`)
    .then(response => response.json())
    .then(json => {
        console.log(json);
        dispatch(getAnimeList(json.top));
    })
    .catch(err => console.log(err));
}