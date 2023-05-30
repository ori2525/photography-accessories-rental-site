//זה הרדוסר שיגרום לנתונים של המשתמש להיות מוכרים לכולם

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import User from "../../models/User";
import { addUser, fetchUserByEmail, fetchUserById, fetchUsers } from "../../services/user";

interface UserState {
  users: any
  currentUser: User
  currentPassword:boolean
}

//סטייט גולבלי יהיה מוכר לכל הפרויקט
const initialState: UserState = {
  users: [],
  currentUser: {name:"",email:"ytu",address:"bjkb",phon:"342443",status:0,id:0,password:"111"},
  currentPassword:false

}

export const getUsers=createAsyncThunk("getUsers",async()=>{
  const {data}=await fetchUsers();
  return data;
})

// export const loginbyid=createAsyncThunk("",async(user:any)=>{
//   const {data}=await fetchUserById(user);
//   return data;
// })0

export const getById=createAsyncThunk("getById",async(id:number)=>{
const {data}=await fetchUserById(id);
return data;
})
export const getByEmail=createAsyncThunk("getByEmail",async(email:String|undefined)=>{
  const {data}=await fetchUserByEmail(email);
  return data;
  })

export const addNewUser=createAsyncThunk("addNewUser",async(Newuser:User)=>{
 
const {data}=await addUser(Newuser);

return data;
})

export const UserSlice = createSlice({

  name: 'user',
  initialState,

  reducers: {
    addNewUser: (state, action: PayloadAction<User>) => {
      
      // state.currentUser=action.payload;
     state.users.push(action.payload);
     
      
    },
    updateUser: (state, action: PayloadAction<any>) => {
      state.currentUser = action.payload;
    },
    updatePassword: (state, action: PayloadAction<any>) => {
      state.currentPassword = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getByEmail.fulfilled, (state, action: PayloadAction<any>) => {
      if(action.payload==null){

      }
      else
      state.currentUser = action.payload;
    })
   
      // builder.addCase(addNewUser.fulfilled,(state, action: PayloadAction<any>) => {
      //   if(action.payload==null)
      //   {
  
      //   }
      //   else{
      //  state.products=action.payload;
      // }
      // })
    
  },

  
});
export const { updateUser,updatePassword } = UserSlice.actions;

export default UserSlice.reducer;


