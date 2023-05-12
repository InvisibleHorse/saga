export const SET_LATEST_NEWS = 'SET_LATEST_NEWS';
export const GET_POPULAR_NEWS = 'GET_POPULAR_NEWS';
export const GET_LATEST_NEWS = 'GET_LATEST_NEWS';
export const SET_POPULAR_NEWS = 'SET_POPULAR_NEWS';
export const SET_LATEST_NEWS_ERROR = 'SET_LATEST_NEWS_ERROR';
export const SET_POPULAR_NEWS_ERROR = 'SET_POPULAR_NEWS_ERROR';
export const SET_LOADING_DATA = 'SET_LOADING_DATA';

export const setLatestNews = payload => ({
    type: SET_LATEST_NEWS,
    payload,
});

export const setPopularNews = payload => ({
    type: SET_POPULAR_NEWS,
    payload,
});
export const loadMorePopular = payload => ({
    type: GET_POPULAR_NEWS,
    payload,
});
export const loadMoreLatest = payload => ({
    type: GET_LATEST_NEWS,
    payload,
});
