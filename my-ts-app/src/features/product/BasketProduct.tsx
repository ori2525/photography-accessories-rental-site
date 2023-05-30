

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Product from '../../models/Product';
import { useNavigate } from 'react-router-dom';

export const BasketProduct=()=> {
  const navigate=useNavigate();
  const cart=useSelector((state:RootState)=>state.productReducer.cart)
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      
    </Box>
  );

  return (
    <>
  
{ cart?.length>0 && cart?.map((p: Product) =>{
 
return <Card sx={{ minWidth: 275 }}>
 <CardContent>
   <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    {p.name}
   </Typography>
   <Typography variant="h5" component="div">
     
   </Typography>
   <Typography sx={{ mb: 1.5 }} color="text.secondary">
    {p.description}
   </Typography>
   <Typography variant="body2">
    {p.price}
     <br />
    
   </Typography>
 </CardContent>
 <CardActions>
 
 </CardActions>
</Card>


})}
    <button  onClick={()=>{
      navigate('topay')
    }} >סיים הזמנה</button>
    </>
  );
}





