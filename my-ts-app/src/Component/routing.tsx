import { Login } from "@mui/icons-material";
import { Route, Routes } from "react-router-dom";
import { Addproduct } from "../features/product/addProduct";
import { BasketProduct } from "../features/product/BasketProduct";
import { CategoryProducts } from "../features/product/categoryProduct";
import { Products } from "../features/product/Products";
import { RentProduct } from "../features/product/RentProduct";
import { ReturnProduct } from "../features/product/ReturnProduct";
import { Thank } from "../features/product/thant";
import { MyRenting } from "../features/renting/MyRenting";
import { Rentings } from "../features/renting/Rentings";
import { Users } from "../features/user/Users";
import { Conect } from "./conect";
import { Homepage } from "./homepage";
import Logup from "./Logup";
import Navbar from "./Navbars/ManagerNavbar";
import { Topay } from "./Topay";
import { UserNavbar } from "./UserNavbar";

<Routes>
<Route path="" element={<Homepage/>} />
 <Route path="Login" element={<Login></Login>} />
 <Route path="Logup" element={<Logup></Logup>}/>

{/* <Route path="navUser" element={<UserNavbar/>}>
 
 <Route path="Products" element={<Products/>} />
 <Route path="RetProduct" element={<ReturnProduct/>} />
 <Route path="MyRenting" element={<MyRenting/>} />
 </Route> */}
  
 <Route path="navUser" element={<UserNavbar/>}/>
 
 <Route path="Products" element={<Products/>} />
 <Route path="RetProduct" element={<ReturnProduct/>} />
 <Route path="MyRenting" element={<MyRenting/>} />
 <Route path="conect" element={<Conect/>} />
 {/* <Route path="categories" element={<CategoryView/>} /> */}
  
<Route path="navManager" element={<Navbar></Navbar>} />
  <Route path="Products" element={<Products/>}/>
  <Route path="AddProduct" element={<Addproduct/>}/>
  <Route path="Renting" element={<Rentings/>}/>
  <Route path="Users" element={<Users/>}/>
  <Route path="rent/:p" element={<RentProduct/>}/>
  {/* <Route path="procard" element={<ProductCard/>}/> */}
  <Route path="BasketProduct" element={<BasketProduct></BasketProduct>}/>
  <Route path="categoryproducts" element={<CategoryProducts/>}/>
  <Route path="cart" element={<BasketProduct/>}/>
  <Route path="thank" element={<Thank/>}/>
  <Route path="topay" element={<Topay/>}/>
  {/* </Route>  */}

  
</Routes>