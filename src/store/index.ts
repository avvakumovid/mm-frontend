import { configureStore } from '@reduxjs/toolkit';
import { userApi } from './features/userApi';
import { authApi } from './features/authApi';

const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([userApi.middleware, authApi.middleware])
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store