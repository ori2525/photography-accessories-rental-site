import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Product from '../../models/Product'
import { AppDispatch, RootState } from '../../redux/store'
import { updateProductToBorroww } from './ProductSlice'


type p={
     newp:Product
}

export const RentProduct= ()=>{
    
    // const dispatch:AppDispatch=useDispatch();
    // const {p}=useParams();
    // let prodi:Product={id:0,name : "rrr",categoryid:1,isExists:false,price:20,description:"xdxxx",img:"kjkkk"};
    const products = useSelector((state: RootState) => state.productReducer.products);
    //  const[prodi,seprodi]=useState({id:0,name : "rrr",categoryid:1,isExists:false,price:20,description:"xdxxx",img:"kjkkk"})
    //  seprodi(prodi.isExists = false);
//  function updateP(p:Product) {
//     setNewp(newp=>({...newp,id:p.id,name:p.name,categoryId:p.categoryId,exists:p.exists,price:p.price,description:p.description,img:p.img}));
//     setNewp(newp=>({...newp,exists:false}));
//     console.log(newp+"newp")
//     dispatch(updateProductToBorroww(newp))
// }
    // {products?.length>0 && products?.map((pro: Product) =>{
    //  <div>    

    //    {pro.id==p? pro.exists=false:{}}
    //    </div>     

    //   })}
//     const [newp,setNewp]=useState<Product>({id:0,categoryId:1,exists:true,description:"ddd",img:"dd",name:"dd",price:23});
// //    let newp:Product=;
//     {products?.length>0&&products?.map((pro:Product)=>
        
//             {pro.id==p&&updateP(pro)}
            
   
//         )}
       
        
        //   {prodi.isExists=false}
         
          
      

   
    
    return(
   <div>
       {/* <>{console.log(p)}</> */}
       <h1>השאלה</h1>
   </div>

    )
}