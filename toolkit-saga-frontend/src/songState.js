//or toolkit 
import { createSlice } from "@reduxjs/toolkit";

export const songSlice=createSlice({
    name:'songs',
    initialState:{
        songs:[],
        isloading:false

    },
    reducers:{
        getsongsFetch:(state)=>{
            state.isloading=true;

        },
        getsongsSuccess:(state,action)=>{
            state.songs=action.payload; 
            state.isloading=false;
        },
        getsongsFailure:(state)=>{
            state.isloading=false;
        }
    }
})



export const {getsongsFetch, getsongsSuccess, getsongsFailure}=songSlice.actions;

export default songSlice.reducer;