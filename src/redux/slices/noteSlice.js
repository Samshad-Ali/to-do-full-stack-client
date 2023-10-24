import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
    name:'/noteSlice',
    initialState:{
        user:{},
        notes:[],
        isAuthenticated:false,
        loading:false,
        refresh:false
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
        setRefresh:(state,action)=>{
            state.refresh=action.payload;
            console.log(state.refresh)
        }
    },
   
})

export default noteSlice.reducer;
export const {setNotes,setUser,setAuthenticated,setLoading,setRefresh} = noteSlice.actions;