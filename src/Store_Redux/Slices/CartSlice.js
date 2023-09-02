import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name : "cartSlice",
    initialState : [],
    reducers : {
        add : (state, action) =>{
            state.push(action.payload);
        },
        remove : (state, action) => {
            return state.filter((item,index) => index !== action.payload)
        }
    }
})

export const {add, remove} = cartSlice.actions
export default cartSlice.reducer
