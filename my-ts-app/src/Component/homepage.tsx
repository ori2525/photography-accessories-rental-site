
import h6 from '../h6.png'

import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'


export const Homepage= ()=>{
 const navigate=useNavigate()
    function enter(){
        navigate("/Products")
    }
    return(
   <div 

   >
    
    
       <div className='container3'>
      <img src={h6} alt="Avatar" className="image2" style={{width:1500}}/>
      <button className="middle"  onClick={enter}>
   <div className="text">see  our collection</div>
 </button>
</div>

       
   </div>

    )
}