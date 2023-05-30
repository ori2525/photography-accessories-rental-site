

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
//=========================================================
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
// import { Renting } from '../renting/Renting';
import { RentProduct } from './RentProduct';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import Product from '../../models/Product';
import { Addcart, rentProduct, updateProductToBorroww } from './ProductSlice';
import img2 from '../../pictures/img2.png';
import Renting from '../../models/Renting';
import { addRent } from '../renting/RentingSlice';
import {BasketProduct} from './BasketProduct';
//=========================================================

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Addchart } from '@mui/icons-material';



interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const ProductCard = (props: { p: Product }) => {
  const [expanded, setExpanded] = React.useState(false);
  const products = useSelector((state: RootState) => state.productReducer.products);
  const cart=useSelector((state:RootState)=>state.productReducer.cart)
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));



  interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
  }


  function BootstrapDialogTitle(props: DialogTitleProps) {
    const { children, onClose, ...other } = props;

    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }

  const [open, setOpen] = React.useState(false);
  const [exist, setexist] = React.useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  
  const CurrentProduct=useSelector((state:RootState)=>state.productReducer.currentProduct)
  const CurrentUser=useSelector((state:RootState)=> state.userReducer.currentUser )
const[a,seta]=React.useState(props.p)


  function ToRent() {
    
    if(!props.p.exists){
      setexist(false)
    }
    else{
        dispatch(Addcart(props.p));
    <Alert severity="success">
      <AlertTitle> תודה</AlertTitle>
     
       המוצר נוסף בהצלחה 
    </Alert>
      
    const newrent:Renting={
      id:0,
      takingDate:new Date(),
      returnDate: new Date(),
      product:props.p,
      user:CurrentUser
      
    }
    
    dispatch(addRent(newrent))

    const newprodcut:Product={
      id:props.p.id,
       category:props.p.category,
       description:props.p.description,
       exists:false,
       img:props.p.img,
       name:props.p.name,
       price:props.p.price,
       color:props.p.color

    }

     dispatch(updateProductToBorroww(newprodcut))

     
    }

   

     const navigate=useNavigate();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      
      if(CurrentUser.name=="")
      navigate('/Login')
      setOpen(true);
      
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
  }

  return (<>
   
     
    
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia 
        component="img"
        alt="green iguana"
        height="250"
        image={require("../../pictures/" + props.p.img )}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.p.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClickOpen} >
          פרטים נוספים
          </Button>
          
          <BootstrapDialog  id="card"
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}  >
            {props.p.name}
          </BootstrapDialogTitle>
          {  !exist&&
<Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="warning">
      <AlertTitle> oops...</AlertTitle>
     
The product is not available — <strong>try something else</strong>
    </Alert>
    </Stack>
    }
          <DialogContent dividers>
            <Typography gutterBottom>
              {props.p.description}
            </Typography>
            <Typography gutterBottom>
           
            <CardMedia id="s"
        component="img"
        alt="green iguana"
        height="140"
        image={require("../../pictures/" + props.p.img )}
      />

            </Typography>
            <Typography gutterBottom>

            </Typography>
          </DialogContent>
          <DialogActions>
            <Button  onClick={ToRent}><ShoppingCartIcon /></Button>
            {/* <Button autoFocus onClick={handleClose}>
              Save changes
            </Button> */}
          </DialogActions>
        </BootstrapDialog>

      </CardActions>
    </Card>
         <br></br>
    </>





  );
}



 














 
 
































