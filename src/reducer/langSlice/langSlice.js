import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
    lang: "en",
}

export const langSlice = createSlice({
    name: "lang",
    initialState: INITIAL_STATE,
    reducers:{
        setLang: (state, action) => {
            state.lang = action.payload;
        }
    }
})
