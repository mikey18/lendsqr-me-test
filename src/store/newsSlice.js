import { createSlice } from '@reduxjs/toolkit';

const newsSlice = createSlice({
    name: 'news_data',
    initialState: {
        data: null,
    },
    reducers: {
        setNews: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { setNews } = newsSlice.actions;
export default newsSlice.reducer;
