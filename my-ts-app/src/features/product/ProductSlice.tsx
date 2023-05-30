//זה הרדוסר שיגרום לנתונים של המשתמש להיות מוכרים לכולם

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import Product from "../../models/Product";
import { fethproducts, postproduct, updateToBorrowed } from "../../services/product"
import p1 from "../../pictures/p1.png" 
import p2 from "../../pictures/p2.png" 

export const updateProductToBorroww=createAsyncThunk("updateProductToBorroww",async(pro:Product)=> {
  const {data}=await updateToBorrowed(pro)
  return data;
})

export const getproducts = createAsyncThunk("getproducts", async () => {
  const { data } = await fethproducts();
  return data;
})


export const addproduct = createAsyncThunk("addproduct", async (pro: Product) => {
  const { data } = await postproduct(pro);
  return data;
})

interface ProState {
  products: Array<Product>
  currentProduct:Product 
  cart:Array<Product>
}

//סטייט גולבלי יהיה מוכר לכל הפרויקט
const initialState: ProState = {
  products: [],

  cart:[],
  // minPrice:0,
  // maxPrice:0,
  currentProduct:{
    id:0,
    category:undefined,
    exists:true,
    img:"",
    description:"e",
    name:"",
    price:0,
    color:"",
  }
}



export const ProductSlice = createSlice({

  name: 'product',
  initialState,

  reducers: {
    addproduct: (state, action: PayloadAction<any>) => {
      state.products.push(action.payload)
    },
    // filterMinPrice: (state, action: PayloadAction<any>) => {
    //   state.currentCategory=action.payload
    // },
    rentProduct: (state, action: PayloadAction<Product>) => {
      state.currentProduct=(action.payload)
    },
    Addcart: (state, action: PayloadAction<Product>) => {
      state.cart.push(action.payload)
    },


  },
  extraReducers:(builder)=>{
    builder.addCase(getproducts.fulfilled,(state, action: PayloadAction<any>) => {
      if(action.payload==null)
      {

      }
      else{
     state.products=action.payload;
    }
    });

    builder.addCase(updateProductToBorroww.fulfilled,(state, action: PayloadAction<any>) => {
      if(action.payload==null)
      {

      }
      else{
        let pro=state.products.find(p=>p.id==action.payload.id)
     state.currentProduct=action.payload;
    }
    });


  },


});
export const { rentProduct,Addcart } = ProductSlice.actions;
export default ProductSlice.reducer;
