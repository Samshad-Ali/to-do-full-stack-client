import {configureStore} from '@reduxjs/toolkit'
import noteSlice from './slices/noteSlice'
export default configureStore({
    reducer:{
        noteReducer:noteSlice,
    }
})