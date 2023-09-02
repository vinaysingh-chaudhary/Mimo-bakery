import {configureStore} from '@reduxjs/toolkit'
import OriginalDataSlice from './Slices/CartSlice';


const store = configureStore({
    reducer : {
       OriginalData : OriginalDataSlice
    }
})


export default store;