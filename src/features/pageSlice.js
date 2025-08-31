import { createSlice } from "@reduxjs/toolkit";
const apiKey = import.meta.env.VITE_RAWG_API_KEY;

export const pageSlice=createSlice({
    initialState:{
        currentPageUrl:`https://api.rawg.io/api/games?key=${apiKey}`,
        nextPageURL:``,
        previousPageURL:``
    },name:"pages",
    reducers:{
        setCurrentPageUrl:(state,actions)=>{
            state.currentPageUrl=actions.payload
        },
        setNextPageURL:(state,actions)=>{
             state.nextPageURL=actions.payload
        },
        setPreviousPageURL:(state,actions)=>{
             state.previousPageURL=actions.payload
        }
    }
})
export const {setCurrentPageUrl,setNextPageURL,setPreviousPageURL}=pageSlice.actions