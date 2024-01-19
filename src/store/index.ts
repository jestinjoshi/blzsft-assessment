import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './slices/bookSlice';
import dialogReducer from './slices/dialogSlice';

export const makeStore = () => configureStore({
    reducer: {
        books: bookReducer,
        dialog: dialogReducer
    },
});

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];