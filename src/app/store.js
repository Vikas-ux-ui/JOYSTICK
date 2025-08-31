import { configureStore } from "@reduxjs/toolkit";
import { gameSlice } from "../features/gameSlice";
import { pageSlice } from "../features/pageSlice";
import { accountSlice } from "../features/accountSlice";
export const store=configureStore({
    reducer:{
        gameRed:gameSlice.reducer,
        pageRed:pageSlice.reducer,
        accountRed:accountSlice.reducer
    }    
})