//זה הרדוסר שיגרום לנתונים של המשתמש להיות מוכרים לכולם

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import Renting from "../../models/Renting"
import { fetchRenting, postRenting } from "../../services/renting";
                                
interface RentState {
  rents:Array<Renting>
  
}


export const addRent = createAsyncThunk("addRent", async (rent: Renting) => {
  const { data } = await postRenting(rent);
  return data;
})

export const getRents=createAsyncThunk("getRents",async()=>{
  const {data}=await fetchRenting();
  return data;
})

//סטייט גולבלי יהיה מוכר לכל הפרויקט
const  initialState:RentState={
rents:[]
}

 export const RentsSlice=createSlice({

name:'rent',
initialState,

reducers:{
  addRent: (state, action: PayloadAction<any>) => {
        state.rents.push(action.payload)
        alert("הגעתי")
      },

},
extraReducers: (builder) => {
  builder.addCase(getRents.fulfilled, (state, action: PayloadAction<any>) => {
    if(action.payload==null){

    }
    else
    state.rents = action.payload;
  })
 
  
},


 })
 export const {  } = RentsSlice.actions;
 export default RentsSlice.reducer;