import axios from "axios";

export const API=axios.create(
    {
      baseURL:"http://localhost:8585/api/category"
    }
  )

  export const fetchCategories=()=>API.get("/allcategories");