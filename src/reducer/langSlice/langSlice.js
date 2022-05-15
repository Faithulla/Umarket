import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
  lang: ["En", "Ru"],
}

export const langSlice = createSlice({
  name: "langSlice",
  initialState: INITIAL_STATE,
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload
    },
  },
})

export const { changeLang } = langSlice.actions
export default langSlice.reducer
