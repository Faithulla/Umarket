import { configureStore } from "@reduxjs/toolkit"
import langSlice from "./langSlice"

export const store = {
  lang: configureStore({
    reducer: {
      langSlice,
    },
  }),
}
