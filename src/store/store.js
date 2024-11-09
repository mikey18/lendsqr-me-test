import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import dataReducer from './newsSlice';
import firebaseMiddleware from '../firebase/middleware';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        news: dataReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(firebaseMiddleware),
});
