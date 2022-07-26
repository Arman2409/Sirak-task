import { createSlice } from "@reduxjs/toolkit";

const dialogSlice = createSlice({
    name:'dialogSlice',
    initialState: {dialogStatus: false},
    reducers: {changeDialogStatus: (state, action) => {
        console.log('changed');
        state.dialogStatus = !state.dialogStatus;
    }
    }
})

export const {changeDialogStatus} = dialogSlice.actions;
export default dialogSlice;