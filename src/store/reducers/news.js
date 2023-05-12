import { SET_LATEST_NEWS, SET_POPULAR_NEWS } from '../actions/news';

const initialState = {
    latestNews: [],
    popularNews: [],
};
const news = (state = initialState, { type, receivedNews }) => {
    switch (type) {
        case SET_LATEST_NEWS:
            return {
                ...state,
                latestNews: receivedNews,
            };
        case SET_POPULAR_NEWS:
            return {
                ...state,
                popularNews: receivedNews,
            };
        default:
            return state;
    }
};
export default news;
