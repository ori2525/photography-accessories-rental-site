


import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from










'@mui/material/Box';
 import { NavLink, useNavigate, useNavigation } from 'react-router-dom';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import {getByEmail, getById, updatePassword, updateUser} from "./UserSlice";
import { unwrapResult } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../../redux/store';
import { UserNavbar } from '../../Component/UserNavbar';
import ManagerNavbar from '../../Component/Navbars/ManagerNavbar';
import { Email } from '@mui/icons-material';
import { useState } from 'react';

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

export default function Login() {

  const dispatch:AppDispatch=useDispatch();
  const user= useSelector((state: RootState) => state.userReducer.currentUser);
  const currentPaswword= useSelector((state: RootState) => state.userReducer.currentPassword);
  const navigate=useNavigate();
  const[bool,setbool]=useState(false)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
     
  dispatch(getByEmail(data.get('Email')?.toString()));

      if(user.password==data.get('password')?.toString())
       
          {setbool(true)}
          
   
  };
  
  return (
   <>
    
  
     {user.status==0?
      navigate("/navUser")
   
    
    :   
    navigate("/navManager")
    
    
      } 
     

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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
                  autoComplete="given-name"
                  name="Email"
                  required
                  fullWidth
                  id="Email"
                  label="Email "
                  autoFocus
                />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button 
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
             
              <Grid item>
                <Link href="Logup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </>
  );
}