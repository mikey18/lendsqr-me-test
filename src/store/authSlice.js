import { createSlice } from '@reduxjs/toolkit';
import { storage } from '../storage/appstorage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: null,
        userData: null,
    },
    reducers: {
        login: (state) => {
            state.isAuthenticated = true;
        },
        logout: (state) => {
            const hasUserData = storage.contains('userData');
            if (hasUserData) {
                storage.delete('userData');
            }
            GoogleSignin.signOut();
            state.userData = null;
            state.isAuthenticated = false;
        },
        setUserData: (state, action) => {
            state.userData = action.payload;
        },
    },
});

export const { login, logout, setUserData } = authSlice.actions;

export default authSlice.reducer;
