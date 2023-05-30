import axios from "axios";
import Renting from "../models/Renting";

export const API=axios.create(
    {
        baseURL:"http://localhost:8585/api/renting"
    }
)

//פונקציה שמביאה את כל רשימת ההשאלות
export const fetchRenting=()=>API.get("/allrentings");

export const postRenting=(newRenting:Renting)=>API.post("",newRenting);