import { configureStore } from '@reduxjs/toolkit';
import { userApi } from './features/userApi';
import { transactionsApi } from './features/transactionsApi';

const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        [transactionsApi.reducerPath]: transactionsApi.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat([userApi.middleware, transactionsApi.middleware]),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store