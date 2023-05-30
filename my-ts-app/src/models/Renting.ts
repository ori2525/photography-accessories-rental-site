import Product from "./Product";
import User from "./User";

export default interface Renting{
  id:number|undefined
  takingDate:Date|undefined;
  returnDate:Date|undefined;
  user:User|undefined;
  product:Product|undefined;
}