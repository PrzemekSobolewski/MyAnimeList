import {GET_LIST} from "../actions/animeListAction";

const initialState = {
    list_data: [],
};

export default (state = initialState, action) => {
    if(action.type === GET_LIST) {
        return {
            ...state,
            list_data: action.list_data
        }
    }
    return state;
}