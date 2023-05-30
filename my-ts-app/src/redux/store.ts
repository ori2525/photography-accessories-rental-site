import { configureStore } from '@reduxjs/toolkit'
import category from "../features/category/categorySlice"
import userReducer from "../features/user/UserSlice"
import productReducer from "../features/product/ProductSlice"
import rentsReducer from "../features/renting/RentingSlice"

//configureStore=createStore
//עם יכולות נוספות
export const store = configureStore({
  reducer: {productReducer,category,userReducer,rentsReducer},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch