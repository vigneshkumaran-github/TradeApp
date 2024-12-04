import { configureStore } from "@reduxjs/toolkit";
import myCryptoData from './Reducers/AddData'
export default configureStore({
    reducer: {
        myCryptoData: myCryptoData,
    },
});