import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./rootReducer";
import {createWrapper} from "next-redux-wrapper";

const makeStore= (context)=> configureStore({
    reducer:rootReducer,
})

export const wrapper = createWrapper(makeStore)