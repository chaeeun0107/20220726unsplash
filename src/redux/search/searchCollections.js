import {createSlice} from "@reduxjs/toolkit";

const initialState={
    state:'loading',
    list:[]
}

const {actions,reducer}= createSlice({
    name:'search/collection',
    initialState,
    reducers:{
        updateState:(state,action)=>{

        }
    }
})

console.log('@@ actions',actions)

export const {
    updateState
}=actions;

export default reducer