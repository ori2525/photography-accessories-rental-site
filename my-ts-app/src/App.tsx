import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import { Homepage } from './Component/homepage';
import  Login from './features/user/Login';
// import { Navbar } from './Component/Navbars/ManagerNavbar';
import { Products } from './features/product/Products';
import { Addproduct } from './features/product/addProduct';
// import { Renting } from './features/renting/Renting';
import { Users } from './features/user/Users';
import { UserNavbar } from './Component/UserNavbar';
import { ReturnProduct } from './features/product/ReturnProduct';
import { MyRenting } from './features/renting/MyRenting';
import LoginNavbar from './Component/Navbars/LoginNavbar';
import Navbar from './Component/Navbars/ManagerNavbar';
import Logup from './Component/Logup';
import {Conect} from './Component/conect';
import { CategoryView } from './features/category/category';

import {BasketProduct} from './features/product/BasketProduct';
import { RentProduct } from './features/product/RentProduct';
import { Rentings } from './features/renting/Rentings';
import { ProductCard } from './features/product/ProductCard';
import { CategoryProducts } from './features/product/categoryProduct';
import { useSelect } from '@mui/base';
import { RootState } from './redux/store';
import { Thank } from './features/product/thant';
import { Topay } from './Component/Topay';





function App() {
  
  return (
    <div className="App">
    <LoginNavbar/>
       
      <Routes>
        <Route path="" element={<Homepage/>} />
         <Route path="Login" element={<Login></Login>} />
         <Route path="Logup" element={<Logup></Logup>}/>
        

         <Route path="navUser" element={<UserNavbar/>}/>
         
         <Route path="Products" element={<Products/>} />
         <Route path="RetProduct" element={<ReturnProduct/>} />
         <Route path="MyRenting" element={<MyRenting/>} />
         <Route path="conect" element={<Conect/>} />
       
        <Route path="navManager" element={<Navbar></Navbar>} />
          <Route path="Products" element={<Products/>}/>
          <Route path="AddProduct" element={<Addproduct/>}/>
          <Route path="Renting" element={<Rentings/>}/>
          <Route path="Users" element={<Users/>}/>
          <Route path="rent/:p" element={<RentProduct/>}/>
          
          <Route path="BasketProduct" element={<BasketProduct></BasketProduct>}/>
          <Route path="categoryproducts" element={<CategoryProducts/>}/>
          <Route path="cart" element={<BasketProduct/>}/>
          <Route path="thank" element={<Thank/>}/>
          <Route path="topay" element={<Topay/>}/>
         
        
          
       </Routes>
    </div>
  );
}

export default App;
