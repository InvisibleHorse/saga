import { SET_LATEST_NEWS, SET_POPULAR_NEWS } from '../actions/news';

const initialState = {
    latestNews: [],
    popularNews: [],
    pages: 0,
};
const news = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_LATEST_NEWS:
            return {
                ...state,
                latestNews: payload.receivedNews,
                pages: payload.pages,
            };
        case SET_POPULAR_NEWS:
            return {
                ...state,
                popularNews: payload.receivedNews,
                pages: payload.pages,
            };
        default:
            return state;
    }
};
export default news;
