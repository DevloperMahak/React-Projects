import { createContext } from "react"
import { useReducer } from "react";
export const Todoitemscontext=createContext({todoitems:[] ,addnewitem:()=>{},deleteitem:()=>{},});

const todoitemsreducer=(currtodoitems,action)=>{
  let newtodoitems=currtodoitems;
  if(action.type==="NEW_ITEM"){
    newtodoitems=[
      ...currtodoitems,{name:action.payload.todoname,date:action.payload.tododate},];
  }
  else if(action.type==="DELETE_ITEM"){
      newtodoitems=currtodoitems.filter((item)=>item.name !==action.payload.todoitemname);
  }
  return newtodoitems;
}

const TodoitemscontextProvider=({children})=>{

    const [todoitems,dispatchtodoitems]=useReducer(todoitemsreducer,[]);
  
    const addnewitem=(todoname,tododate)=>{
      const newitemaction={
        type:"NEW_ITEM",
        payload:{todoname,tododate}
      };
      dispatchtodoitems(newitemaction);
    };
  
    const deleteitem=(todoitemname)=>{
      const deleteitemaction={
        type:"DELETE_ITEM",
        payload:{todoitemname}
      };
      dispatchtodoitems(deleteitemaction);
    };
    return < Todoitemscontext.Provider value={{todoitems,addnewitem,deleteitem,}}>{children}</Todoitemscontext.Provider>
}
export default TodoitemscontextProvider;