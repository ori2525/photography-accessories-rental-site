import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Renting from "../../models/Renting";

import { AppDispatch, RootState } from "../../redux/store";
import { getRents } from "./RentingSlice";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, ImageList } from '@mui/material';
import Product from "../../models/Product";
import { updateProductToBorroww } from "../product/ProductSlice";
export const Rentings=()=>{

    const CurrentUser=useSelector((state:RootState)=> state.userReducer.currentUser )
    const dispach:AppDispatch =useDispatch();  
    const rents=useSelector((state:RootState)=>state.rentsReducer.rents)
    

useEffect(()=>{
dispach(getRents())
},[])

  const dispatch:AppDispatch=useDispatch();
   
    return(
        <div >
        
       
         { rents?.length>0 && rents?.filter((r:Renting) =>
               r.user?.id==CurrentUser.id

          ).map((re:Renting)=> 

         <div style={{display:"inline-block"}}>
          
        <br></br>
        <br></br> 
   <Card sx={{ maxWidth: 345 }} className='cardd'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require("../../pictures/" + re.product?.img )}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {re.user?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {re.product?.name}
          </Typography>
           
          <Typography variant="body2" color="text.secondary">
           {re.takingDate?.toString()}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {re.takingDate?.toString()}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {/*  */}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button  size="small" color="primary" >
          Share
        </Button> */}
       {!re.product?.exists&& <Button  onClick={()=>{
              const newprodcut:Product={
                id:re.product?.id,
                 category:re.product?.category,
                 description:re.product?.description,
                 exists:true,
                 img:re.product?.img,
                 name:re.product?.name,
                 price:re.product?.price,
                 color:re.product?.color
          
              }
              alert("המוצר הוחזר בהצלחה!!!!")
          
              dispatch(updateProductToBorroww(newprodcut))
              {re.returnDate=new Date()}
        }}>החזר פריט</Button>}
      </CardActions>
    </Card>





         </div>
          )}
       
   
       </div>
    )
         }



