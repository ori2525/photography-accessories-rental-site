import React from 'react'
import ChatIcon from '@mui/icons-material/Chat';
import { NavLink } from 'react-router-dom'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import back from '../nav.png'

export const UserNavbar= ()=>{
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return(
      
       
     
   <div>
       <nav className='nav'>

    <NavLink id='nav1' to ="/Products" style={({isActive}) => ({color: isActive ? 'pink' : 'white'})}>המוצרים שלנו</NavLink>
    <span>  </span>
    
    
    
    <NavLink id='nav1' to="/Conect" style={({isActive}) => ({color: isActive ? 'pink' : 'white'})}>צור קשר</NavLink>
    
   
    
 </nav>
 

 <div style={{marginTop:10}} className="container1">
  <img src={back} alt="Avatar" className="image1" style={{width:1500}}/>
  <div className="overlay1">
    <div className="text1"><p>Hi!<br></br>
Glad you chose our site!<br></br>
You are welcome to watch and be impressed<br></br> by the rare photography products we have<br></br>
We are sure you will enjoy it!!</p></div>
  </div>
</div>
 
   </div>
   

    )
}



