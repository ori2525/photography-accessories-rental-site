import axios from "axios";
import Product from "../models/Product";

export const API=axios.create(
    {
        baseURL:"http://localhost:8585/api/product"
    }
)

//get all products---V
export const fethproducts=()=>API.get("/allproducts");

//Create and add a product------V
export const postproduct=(newProduct:Product)=>API.post("",newProduct);

// Get selected product
export const fetchSingleproduct = (id:number) => API.get(`/${id}`);


// Delete selected product
export const deleteproduct =  (id:number) =>  API.delete(`/${id}`);

//update the product to be renting
export  const  updateToBorrowed=(updatePro:Product)=>API.put(`/${updatePro.id}`,updatePro)