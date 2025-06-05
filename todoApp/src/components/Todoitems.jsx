import { useContext } from 'react';
import { Todoitemscontext } from '../store/todoitem-store';
import container from './Container.module.css'
import Todoitem from "./Todoitem"
const Todoitems=()=>{
  const {todoitems}=useContext(Todoitemscontext);
  console.log(todoitems);
  return(<>
   <div className={container["items-container"]}>
    {todoitems.map((item) =>(<Todoitem key={item.name} todoname={item.name} tododate={item.date}></Todoitem>))}
      </div></>);
};
export default Todoitems;