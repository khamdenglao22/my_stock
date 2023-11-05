import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: "Product",
    product:[],
    loading:false
}


export const productSlice = createSlice({
    name:'productStore',
    initialState: initialState,
    reducers:{
        
    }
})

export default productSlice.reducer;