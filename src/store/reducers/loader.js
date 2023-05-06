import { SET_LOADING_DATA } from '../actions/news';

const initialState = {
    isDataLoading: false,
};

const loader = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_LOADING_DATA:
            return {
                ...state,
                isDataLoading: payload,
            };
        default: return state;
    }
};

export default loader;
