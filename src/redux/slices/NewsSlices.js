import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    newsList: [],
    isLoading: false,
    favouriteList: [],
};

export const newsSlice = createSlice({
    name: 'newsSlice',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setNewsList: (state, action) => {
            state.newsList = action.payload;
            state.isLoading = false;
        },
        setFavouriteList: (state, action) => {
            state.favouriteList = action.payload;
            state.isLoading = false;
        }
    },
});

// Action creators are generated for each case reducer function
export const { setNewsList, setLoading, setFavouriteList } = newsSlice.actions;

export default newsSlice.reducer

