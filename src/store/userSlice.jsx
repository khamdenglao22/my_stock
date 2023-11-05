import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: "hello word redux-toolkit",
    user:[],
    loading:false
}


export const userSlice = createSlice({
    name:'userStore',
    initialState,
    reducers:{
        login:(state, action) => {
            state.value = "LogIn User"
            state.user = action.payload
            state.loading = true
            
        },
        logout:(state) => {
            state.value = "Logout User"
            state.loading = false

        }
    }
})

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;