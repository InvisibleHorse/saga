export const SET_LATEST_NEWS = 'SET_LATEST_NEWS';
export const GET_POPULAR_NEWS = 'GET_POPULAR_NEWS';
export const GET_LATEST_NEWS = 'GET_LATEST_NEWS';
export const SET_POPULAR_NEWS = 'SET_POPULAR_NEWS';
export const SET_LATEST_NEWS_ERROR = 'SET_LATEST_NEWS_ERROR';
export const SET_POPULAR_NEWS_ERROR = 'SET_POPULAR_NEWS_ERROR';
export const SET_LOADING_DATA = 'SET_LOADING_DATA';

export const setLatestNews = receivedNews => ({
    type: SET_LATEST_NEWS,
    receivedNews,
});

export const setPopularNews = receivedNews => ({
    type: SET_POPULAR_NEWS,
    receivedNews,
});
export const loadMorePopular = receivedNews => ({
    type: GET_POPULAR_NEWS,
    receivedNews,
});
export const loadMoreLatest = receivedNews => ({
    type: GET_LATEST_NEWS,
    receivedNews,
});
