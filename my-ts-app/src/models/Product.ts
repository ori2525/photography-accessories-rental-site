import Category from "./Category";

export default interface Product{
  id:number| undefined;
  name:string| undefined;
  description:string| undefined;
  price:number| undefined;
   exists:boolean| undefined;
   category:Category| undefined;
   img:string| undefined;
   color:String|undefined
  //  category:Category;
}