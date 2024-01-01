import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { rootReducer, rootSaga } from './RootReducer';
const sagaMiddleware = createSagaMiddleware()
const middleware = [
    ...getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
        thunk: true,
    }),
    sagaMiddleware,
]
const persistConfig = {
    key: '@prcStore-21',
    storage: AsyncStorage
};
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware, thunk))
// const store = configureStore({
//     reducer: rootReducer,
//     middleware,
//     devTools: process.env.NODE_ENV !== 'production',
//     enhancers: [reduxBatch],
// })

export type AppDispatch = typeof store.dispatch

/**
 * @see https://github.com/rt2zz/redux-persist#persiststorestore-config-callback
 * @see https://github.com/rt2zz/redux-persist#persistor-object
 */
export const persistor = persistStore(store,)

sagaMiddleware.run(rootSaga)

export default store
