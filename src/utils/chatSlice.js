import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const chatSlice=createSlice({
    name:'chat',
    initialState:{
        messages:[]
    },
    reducers:{
        addChat:(state,action)=>{
            state.messages.push(action.payload);
            if(state.messages.length>LIVE_CHAT_COUNT){
                state.messages.shift();
            }
        },
    }
})

export const {addChat}=chatSlice.actions

export default chatSlice.reducer