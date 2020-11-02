export const GET_ANIME = 'GET_ANIME';
const PART_OF_URL = 'https://api.jikan.moe/v3/anime/';

export const getAnimeList = (response) => {
    return {
        type: GET_ANIME,
        anime_data: response
    };
}

export const fetchAnime = (id) => async dispatch => {
    await fetch(PART_OF_URL + `${id}`)
    .then(response => response.json())
    .then(json => {
        dispatch(getAnimeList(json));
    })
    .catch(err => console.log(err));
}