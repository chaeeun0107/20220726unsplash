import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {httpClient} from "../../api/httpClient";

const initialState={
    state:'loading',
    list:[],
    page:1,
}

export const fetchPhotos =  createAsyncThunk('fetchPhotos',async (params) => {
    const {data} = await httpClient({
        url: '/photos',
        method: 'get',
        params,
    })
    return {
        data,
        page:params.page
    };
})

const {actions,reducer}= createSlice({
    name:'photos',
    initialState,
    reducers:{
        updateState:(state,action)=>{

        }
    },
    extraReducers:builder => {
        builder.addCase(fetchPhotos.pending,(state,action)=>{
            state.status='loading';
        })
        builder.addCase(fetchPhotos.fulfilled,(state, {payload})=>{
            state.status='success';
            state.page=payload.page;
            state.list=[
                ...state.list,
                ...payload.data
            ];
        })
    }
})


export const {
    updateState
}=actions;

export default reducer