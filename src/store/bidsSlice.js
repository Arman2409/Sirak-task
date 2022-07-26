import { createSlice } from "@reduxjs/toolkit";

const bidsSlice = createSlice({
    name:'bidsSlice',
    initialState: {bids: []},
    reducers: {addBid: (state, action) => {
       state.bids.push(action.payload);
    }
    }
})

export const {addBid} = bidsSlice.actions;
export default bidsSlice;