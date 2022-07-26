import { configureStore  } from '@reduxjs/toolkit';
import dialogSlice from './dialogSlice.js';

const store = configureStore({ reducer: {dialog: dialogSlice.reducer}});
export default store