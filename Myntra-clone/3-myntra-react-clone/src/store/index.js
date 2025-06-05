import {configureStore} from "@reduxjs/toolkit"
import itemsSlice from "./itemsSlice";
import fetchStatusSlice, { fetchStatusActions } from "./fetchstatusSlice";



const myntrastore=configureStore({reducer:{
  items:itemsSlice.reducer,
  fetchStatus:fetchStatusSlice.reducer,
}});

export default myntrastore;