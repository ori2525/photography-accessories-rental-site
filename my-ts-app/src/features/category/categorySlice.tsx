//reducer
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Category from '../../models/Category'
import { fetchCategories } from '../../services/categiry'

// export const getCategories = createAsyncThunk("category/getCategories", async () => {
//   const { data } = await fetchCategories();
//   return data;
// });

export const getcategories=createAsyncThunk("getcategories",async()=>{
  const {data}=await fetchCategories();
  return data
})

interface CategoryState {
  categries: Array<Category>
  currentCategory:number
 
}

//סטייט גלובלי
// const initialState:any= {
//  categries:Array<Category>
// }

const initialState: CategoryState = {
  categries: [
    
  ],
  currentCategory:0
}


//createSlice-יוצרת רדוסר
//יוצרת טייפ 
export const categorySlice = createSlice({
  name: 'category',
  initialState,
  //reducers- נכתוב את הפעולות
  reducers: {
  //ניתן לעדכן ישירות סטייט
    addCategry: (state, action: PayloadAction<any>) => {
      state.categries.push(action.payload)
    },
    filterCategory: (state, action: PayloadAction<any>) => {
      state.currentCategory=action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getcategories.fulfilled, (state, action: PayloadAction<any>) => {
      if(action.payload==null){

      }
      else
      state.categries = action.payload;
    })
  }
})

// Action creators are generated for each case reducer function
export const { addCategry ,filterCategory} = categorySlice.actions

export default categorySlice.reducer