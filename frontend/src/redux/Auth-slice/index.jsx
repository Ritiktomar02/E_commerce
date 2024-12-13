import { createSlice } from "@reduxjs/toolkit";

const initialState={
   
    isLoading:false,
    isAuthenticated:false,
    user:null
}


const authslice=createSlice({
    name:'auth',
    initialState,
    reducers:{

    }

})

export const {}=authslice.actions;

export default authslice.reducer;