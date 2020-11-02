import {GET_ANIME} from "../actions/animeAction";

const initialState = {
    anime_data: [],
};

export default (state = initialState, action) => {
    if(action.type === GET_ANIME) {
        return {
            ...state,
            anime_data: action.anime_data
        }
    }
    return state;
}