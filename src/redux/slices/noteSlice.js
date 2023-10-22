import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
    name:'/noteSlice',
    initialState:{
        user:{},
        notes:[],
        isAuthenticated:false,
        loading:false,
    },
    reducers:{
        setNotes:(state,action)=>{
            state.notes=action.payload;
        },
        setUser:(state,action)=>{
            state.user=action.payload;
        },
        setAuthenticated:(state,action)=>{
            state.isAuthenticated=action.payload;
        },
        setLoading:(state,action)=>{
            state.loading=action.payload;
        },
    },
   
})

export default noteSlice.reducer;
export const {setNotes,setUser,setAuthenticated,setLoading} = noteSlice.actions;