import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Badge, BottomNavigation, BottomNavigationAction, Button } from '@mui/material';
import logo from "../../pictures/logo4.png" 
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



function ll(){
  return( <Link to={"/Login"} ></Link>)
 
}

export default function LoginNavbar() {
  //הבאנו את העגלת קניות כדי לדעת מה כמות הדברים שיש לו בסל (המספר ליד האיקון יעלה)
  const cart=useSelector((state:RootState)=>state.productReducer.cart)

  const navigate=useNavigate();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose1 = () => {
    setAnchorEl(null);
    navigate('/Renting')

  };

  //הבאנו את המשתמש הנוכחי כדי שבאיקון שבצד יהיה רשום את שמן
  const user= useSelector((state: RootState) => state.userReducer.currentUser);
  
  return (
    <Box sx={{ flexGrow: 1 }}>
    
      <AppBar position="static">
        <Toolbar className='homee'>
        
           <div>
          
             <Button variant="outlined" id="butnav"><NavLink id='s1' to ="/"  style={({isActive}) => ({color: isActive ? 'pink' : 'white'})}>Home </NavLink></Button>
          {/* <NavLink to ="/Login" style={({isActive}) => ({color: isActive ? 'pink' : 'white'})}>כניסה</NavLink> */}
          <span>  </span>
           {user.name==""?
          <Button variant="outlined" id="butnav"><NavLink id='s1' to ="/Login"  style={({isActive}) => ({color: isActive ? 'pink' : 'white'})}>sign in</NavLink></Button>:
          <Button variant="outlined" id="butnav"><NavLink id='s1' to ="/"  style={({isActive}) => ({color: isActive ? 'pink' : 'white'})}>log out</NavLink></Button>}

          <span>  </span>
          <Button variant="outlined" id="butnav"><NavLink id='s1' to ="/Logup"  style={({isActive}) => ({color: isActive ? 'pink' : 'white'})}>sign up</NavLink></Button>
          <span>  </span>
          </div>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             <nav >
                <div>
         
          </div>
         
         </nav>
         <NavLink to ="/"  ><img style={{height:100,width:220,marginTop:10}} src={logo}/></NavLink>
      
          </Typography>

          {auth && (
            <div >
              <button onClick={()=>{
                 navigate('/cart')
             }} className='b1'> <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={cart.length} color="error">
             <ShoppingCartIcon/>
              </Badge>
            </IconButton></button>
              
             <IconButton id='i1'
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
 
          
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>{user.name}</MenuItem>
                <MenuItem onClick={handleClose1}>ההזמנות שלי</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}










