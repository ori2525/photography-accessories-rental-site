import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { NavLink } from 'react-router-dom';
import { AppDispatch, RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { filterCategory, getcategories } from '../category/categorySlice';
import p2 from '../../pictures/p2.png'

export const CategoryProducts=()=>{
        
    // const categories=useSelector((state:RootState)=>state.category.categries)
    // const dispatch:AppDispatch=useDispatch();

    // dispatch(filterCategory(2))
    // React.useEffect(()=>{
    //     dispatch(getcategories())
    //     },[])
        

    return (
        <>
         {/* <ImageList sx={{ width: 1500, height: 1000 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">מוצרים שלנו</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
         <NavLink to ="/Products"  >
        <ImageListItem key={item.img}>
          
               <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
        </NavLink>
      ))}
    </ImageList> */}
        </>
    )
}



