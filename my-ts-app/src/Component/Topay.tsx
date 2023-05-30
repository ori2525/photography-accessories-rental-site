import { Box, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Topay=()=>{
    const navigate=useNavigate();
  function pay(){
     navigate('/thank')
  }
    return(
        <>
         <div>
       <h1>צור קשר</h1>
      
       <Box style={{height:600}}
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
          label="שם"
          defaultValue=""
        />
        </div>
        <div>
      <TextField
          required
          id="outlined-required"
          label="טלפון"
          defaultValue=""
        />
      </div>
      <div>
      <TextField
          required
          id="outlined-required"
          label="מה אני רוצה"
          defaultValue=""
        />
         </div>
      <div>
<button onClick={pay}>שלח</button>        
      </div>
    </Box>

   </div>
        
        </>
    )
}