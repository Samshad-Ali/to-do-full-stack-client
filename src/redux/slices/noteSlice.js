import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
    name:'/noteSlice',
    initialState:{
        user:{},
        notes:[],
        isAuthenticated:false

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
            console.log(`from authslice ${state.isAuthenticated}`)
        }
    },
   
})

export default noteSlice.reducer;
export const {setNotes,setUser,setAuthenticated} = noteSlice.actions;