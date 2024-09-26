import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "../utils/constants";

const chatSlice=createSlice({
    name:'chat',
    initialState:{
        messages:[]
    },
    reducers:{
        addChat:(state,action)=>{
            state.messages.splice(LIVE_CHAT_COUNT,1);
            state.messages.unshift(action.payload);
        },
    }
})

export const {addChat}=chatSlice.actions

export default chatSlice.reducer