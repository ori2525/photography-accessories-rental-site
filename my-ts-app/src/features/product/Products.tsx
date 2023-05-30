import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store';
import { getproducts } from './ProductSlice';
//------------------------------------------------
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Product from '../../models/Product';
import { width } from '@mui/system';

import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useNavigate } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { ProductCard } from './ProductCard';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { filterCategory } from '../category/categorySlice';
 import ImageListItemBar from '@mui/material/ImageListItemBar';
 import ListSubheader from '@mui/material/ListSubheader';

 import InfoIcon from '@mui/icons-material/Info';
import { ButtonGroup } from '@mui/material';
import f from '../../pictures/family.png'
import n from '../../pictures/newborn.png'
import c from '../../pictures/chalake.png'
import o from '../../pictures/one year.png'
import { CenterFocusStrong } from '@mui/icons-material';


export const Products = () => {

  const category = useSelector((state: RootState) => state.category.currentCategory)
  // const min=useSelector((state:RootState)=>state.productReducer.minPrice)
  // const max=useSelector((state:RootState)=>state.productReducer.maxPrice)
  const products = useSelector((state: RootState) => state.productReducer.products)
  // console.log(products);
  const dispach: AppDispatch = useDispatch();
  //  const navigate=useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [filteredpro, setFilteredpro] = useState(products);
  // const [categoryId, setCategoryId] = useState(null);


  useEffect(() => {
    dispach(getproducts());
  console.log(products)
   
  }, [])

  // useEffect(() => {
  //   if (categoryId == null) setFilteredpro(products);
  //   else
  //     setFilteredpro(products.filter((p:Product) => p.categoryid=== categoryId));
  // }, [categoryId]);



  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);

  };
  const handleClose1 = () => {
    console.log('in 1')
    setAnchorEl(null);
    // const arr=filteredpro.filter((p:Product)=>p.categoryid==1)
    dispach(filterCategory(1))
    // setFilteredpro(arr);
    console.log("eeeeeeeee")
    
  };
  const handleClose2 = () => {
    console.log('in 2')
    setAnchorEl(null);
    dispach(filterCategory(2))
    console.log(category)
  };
  const handleClose3 = () => {
    setAnchorEl(null);
    dispach(filterCategory(3))
  };
  const handleClose4 = () => {
    setAnchorEl(null);
    dispach(filterCategory(4))
  };
  // const buttons = [
    
  //   <Button onClick={handleClose2} key="two"><img style={{width:100,height:100}} src={p11}/></Button>,
  //   <Button onClick={handleClose3} key="three"><img style={{width:100,height:100}} src={p11}/></Button>,
  // ];
  return (
    <div>

<br></br>
<br></br>
      {/* <Box
       sx={{
         display: 'flex',
         '& > *': {
           m: 1,
         },
       }}
     >
      
       <ButtonGroup
         orientation="vertical"
         aria-label="vertical contained button group"
         variant="text"
       >
         {buttons}
       </ButtonGroup>
     </Box> */}



<div className='divvv'>
<Button   onClick={handleClose1}    key="one"><div className='container'>
      <img src={n} alt="Avatar" className="image" style={{width:300}}/>
      <div className="middle"  >
   {/* <div className="text">see  our collection</div> */}
 </div>
</div></Button>
<span></span>
<span></span>
<Button   onClick={handleClose2}    key="one"><div className='container'>
      <img src={o} alt="Avatar" className="image" style={{width:300}}/>
      <div className="middle"  >
   {/* <div className="text">see  our collection</div> */}
 </div>
</div></Button>
<span></span>
<span></span>
<Button   onClick={handleClose3}    key="one"><div className='container'>
      <img src={c} alt="Avatar" className="image" style={{width:300}}/>
      <div className="middle"  >
   {/* <div className="text">see  our collection</div> */}
 </div>
</div></Button>
<span></span>
<span></span>
<Button   onClick={handleClose4}    key="one"><div className='container'>
      <img src={f} alt="Avatar" className="image" style={{width:300}}/>
      <div className="middle"  >
   {/* <div className="text">see  our collection</div> */}
 </div>
</div></Button>
</div>
<br></br>
<br></br>
    <br></br>
     
     {/* <div className='container3'>
    <img src={p11} alt="Avatar" className="image" style={{width:350}}/>
    <div  className="middle">
    <div className="text2">new born</div>
    </div  >
    </div> */}
      
    {/* <Button   onClick={handleClose2}    key="one"><div className='container3'>
    <img src={p11} alt="Avatar" className="image" style={{width:350}}/>
    <div  className="middle">
    <div className="text2">smash</div>
    </div  >
    </div></Button>
    <Button   onClick={handleClose3}    key="one"><div className='container3'>
    <img src={p11} alt="Avatar" className="image" style={{width:350}}/>
    <div  className="middle">
    <div className="text2">chalake</div>
    </div  >
    </div></Button> */}
      
  


     
      {/* <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        סנן לפי
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose1}>ניו-בורן</MenuItem>
        <MenuItem onClick={handleClose2}>סמאש-קייק</MenuItem>
        <MenuItem onClick={handleClose3}>חלאקה</MenuItem>
        <MenuItem onClick={handleClose4}>בת מצוה</MenuItem>
      </Menu>
 */}

  

     
      <Box sx={{ width: 1500, height: 1000, overflowY: 'scroll' }}>
        <ImageList className='list' variant="masonry" cols={4} gap={8}>
      
          {/* <h1>{category}</h1> */}


          {/* { products?.length>0 && products?.map((p: Product) =>
          <div>
          <ProductCard key={p.id} p={p} />
          {console.log("p")}
          {console.log(p.categoryId)}
          
          <h1>{p.exists.toString()}</h1>
          </div>
          )} */}
         
          
          {products?.length>0 && products?.filter((p:Product)=>p.category?.id==category).map((pro: Product)=>
        <ProductCard key={pro.id} p={pro} />
        )}
        </ImageList>
      </Box>
      





    </div>

  )
}
















 
 
 

 


 