


import axios from "axios";
import User from "../models/User";

export const API=axios.create(
  {
    baseURL:"http://localhost:8585/api/user"
  }
)

//פונקציה שמחזירה את כל המשתמשים באתר
export const fetchUsers=()=>API.get("/allusers");


export const fetchUserById=(id:number)=>API.get(`/${id}`);

//פןנקציה שמוסיפה משתמש לאתר
export const addUser=(Newuser:User)=>API.post("",Newuser)

export const fetchUserByEmail=(email:String| undefined)=>API.get(`getbyemail/${email}`)
// export const fetchUserByEmailandpassword=(email:String| undefined)=>API.post("signIn",`getbyemail/${email}`)

////פונקציה שמחזירה משתמש לפי הת"ז שהוא הכניס
// export const fetchUserById=()=>API.post("/loginUser");