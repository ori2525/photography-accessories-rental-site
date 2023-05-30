
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Category from "../../models/Category";
import { AppDispatch, RootState } from "../../redux/store";
import { getcategories } from "./categorySlice";


type CategoryProps = {
    // filterByCategory: (id: number) => void
    setCategoryId: Dispatch<SetStateAction<any>>;
  };

export const CategoryView=({ setCategoryId }: CategoryProps)=>{
   
    const dispach:AppDispatch=useDispatch();
    const categries=useSelector((state:RootState)=>state.category.categries);
   
   
    useEffect(()=>{
        dispach(getcategories());
    },[])

    return(<>

{categries &&
        categries.map((category: Category) => (
          <ul key={category.id}>
            <button onClick={() => setCategoryId(category.id)}>
              {category.name}
            </button>
          </ul>
        ))}



    {/* <h1>eeeeeee</h1>
     {categries.map((c:Category)=>
     alert(c.name)
     )}
    {} */}
    </>)

}


// <label> area  </label>
//                 <select ref={areaRef} id="select" required >
//                     <option value={0}></option>
//                     <option value={1}>north</option>
//                     <option value={2}>south</option>
//                     <option value={3}>center</option>
//                 </select>
//זה במיקום של האינפוט
///ולמעלה, מחוץ לטופס, תגדירי את הרף

// const areaRef = useRef<HTMLSelectElement>(null);
//זה האימפורט
//
