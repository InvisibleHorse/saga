import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import news from './reducers/news';
import loader from './reducers/loader';
import rootSaga from './sagas/saga';
import errors from './reducers/errors';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        news,
        errors,
        loader,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
