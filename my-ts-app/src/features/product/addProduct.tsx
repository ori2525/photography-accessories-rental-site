import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../../models/Product';
import { addproduct } from './ProductSlice';
//---------------------------------------
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import p1 from "../../pictures/p1.png" 
import { AppDispatch, RootState } from '../../redux/store';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Button } from '@mui/material';
//--------------------------------------------
// import * as React from 'react';
import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
 import { NavLink } from 'react-router-dom';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useDispatch, useSelector } from 'react-redux';
// import {getById, updateUser} from "./UserSlice";
import { unwrapResult } from '@reduxjs/toolkit';
// import { AppDispatch, RootState } from '../../redux/store';
import { UserNavbar } from '../../Component/UserNavbar';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();





export const Addproduct= ()=>{
    //שורה שלא הבנו למה עושים אותה -דחוף הסברררררר
    //const books = useSelector((state: RootState) => state.bookReducer.books);
      
     const dispach:AppDispatch=useDispatch();
     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const p:Product={
        name: data.get('nameProduct')?.toString(), description: data.get('description')?.toString(), price: 100, exists: false, img: 'p1', id: 1,
        category: undefined,color:""
      };
      dispach(addproduct(p));
    }
    
    return(
   <div>


<ThemeProvider theme={theme}>
<Container component="main" maxWidth="xs">
  <CssBaseline />
  <Box
    sx={{
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    
    {/* <Typography component="h1" variant="h5">
      Sign in
    </Typography> */}
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
    <div> 
           
        <TextField
                  autoComplete="given-name"
                  name="nameProduct"
                  required
                  id="nameProduct"
                  label="nameProduct"
                  autoFocus
                />
        </div>
        <br/>
        <div>
        <TextField
          id="outlined-multiline-static"
          name="description"
          label="description"
          multiline
          rows={4}
        />
        </div>
        <br/>
        <div>
         
        <TextField
          id="outlined-number"
          name="price"
          label="price"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        </div>
        
      
      <Button  
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        ADD
      </Button>
      <Grid container>
        
        
      </Grid>
    </Box>
  </Box>
  <Copyright sx={{ mt: 8, mb: 4 }} />
</Container>
</ThemeProvider>









{/* 
<Box className='box'
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <div> 
            <TextField
          required
          id="outlined-required"
          label="תאור"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-required"
          label="שם מוצר"
          defaultValue=""
        />
        </div>

        <div>
        <TextField
          id="outlined-multiline-static"
          label="תאור"
          multiline
          rows={4}
          
        />
        
        <TextField
          id="outlined-number"
          label="מחיר"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        </div>

       
      <div>
       
       
        <TextField id="outlined-search" label="Search field" type="search" />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
      </div>
     
     
    </Box> */}
  
    {/* <Button 
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              הוספה
            </Button> */}
       {/* <button onClick={() => dispach(addproduct(p))}>add</button> */}
   </div>

    )
}


