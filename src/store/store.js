import { configureStore  } from '@reduxjs/toolkit';
import dialogSlice from './dialogSlice.js';
import bidsSlice from './bidsSlice.js';

const store = configureStore({ reducer: 
    {dialog: dialogSlice.reducer, 
     bids: bidsSlice.reducer} 
});
export default store