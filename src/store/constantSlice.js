import {createSlice} from "@reduxjs/toolkit";

const constantSlice = createSlice({
    name: "constant",
    initialState: {
        browserlogo: "",
        currentPageTitle: "",
        currentPage: "",
    },
    reducers:{
        updatePageTitles(state,action){
            state.currentPageTitle = action.payload;
        },
        setCurrentPage(state,action){
            state.currentPage = action.payload;
        },
    }
});

export const constantActions = constantSlice.actions;
export default constantSlice;