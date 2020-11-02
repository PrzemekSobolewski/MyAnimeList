import {GET_LIST, SET_LAST_SEARCH} from "../actions/animeListAction";

const initialState = {
    list_data: [],
    last_page: '',
    last_search: ''
};

export default (state = initialState, action) => {
    if(action.type === GET_LIST) {
        return {
            ...state,
            list_data: action.list_data,
            last_page: action.last_page
        }
    }
    else if(action.type === SET_LAST_SEARCH) {
        return {
            ...state,
            last_search: action.last_search
        }
    }
    return state;
}