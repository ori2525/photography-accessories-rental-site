import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { getUsers } from './UserSlice';
export const Users= ()=>{
    const dispach:AppDispatch =useDispatch();  
    const users=useSelector((state:RootState)=>state.userReducer.users)
    console.log(users)

useEffect(()=>{
dispach(getUsers())
},[])


    return(
   <div>
       
   </div>

    )
}


// const  products=useSelector((state:RootState)=>state.productReducer.products)
// console.log(products);
// const dispach=useDispatch;




