import { takeEvery, put, call, fork } from '@redux-saga/core/effects';
import {
    GET_LATEST_NEWS,
    GET_POPULAR_NEWS,
    setLatestNews,
    setPopularNews,
    SET_POPULAR_NEWS_ERROR,
    SET_LATEST_NEWS_ERROR, SET_LOADING_DATA,
} from '../actions/news';
import { getLatestNews, getPopularNews } from '../../api/api';

export function* handleLatestNews(action) {
    try {
        yield put({ type: SET_LOADING_DATA, payload: true });
        const { hits } = yield call(getLatestNews, action.receivedNews);
        yield put(setLatestNews(hits));
    } catch {
        yield put({ type: SET_LATEST_NEWS_ERROR, payload: 'Error fetching latest news' });
    } finally {
        yield put({ type: SET_LOADING_DATA, payload: false });
    }
}
export function* handlePopularNews(action) {
    try {
        yield put({ type: SET_LOADING_DATA, payload: true });
        const { hits } = yield call(getPopularNews, action.receivedNews);
        yield put(setPopularNews(hits));
    } catch {
        yield put({ type: SET_POPULAR_NEWS_ERROR, payload: 'Error fetching popular news' });
    } finally {
        yield put({ type: SET_LOADING_DATA, payload: false });
    }
}
export function* watchPopularSaga() {
    yield takeEvery(GET_POPULAR_NEWS, handlePopularNews);
}
export function* watchLatestSaga() {
    yield takeEvery(GET_LATEST_NEWS, handleLatestNews);
}
export default function* rootSaga() {
    yield fork(watchPopularSaga);
    yield fork(watchLatestSaga);
}
