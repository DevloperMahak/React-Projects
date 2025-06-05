import { useContext, useRef, useState } from 'react';
import todo from './todo.module.css'
import { BiSolidCommentAdd } from "react-icons/bi";
import { Todoitemscontext } from '../store/todoitem-store';

function Addtodo(){
  const {addnewitem}=useContext(Todoitemscontext);
  const todoNameElement=useRef();
  const todoDateElement=useRef();

  
  const handleaddbutton=(event)=>{
    event.preventDefault();
    const todoname=todoNameElement.current.value;
    const tododate=todoDateElement.current.value;
    todoNameElement.current.value="";
    todoDateElement.current.value="";
    addnewitem(todoname,tododate);
  };
  return <div className="container">
  <form className="row row-2"
  onSubmit={handleaddbutton}>
  <div className="col-6"><input type="text" ref={todoNameElement} className={todo["mg-input"]} placeholder="Enter Todo Here" ></input></div>
  <div className="col-4"><input type="date"  ref={todoDateElement} className={todo["mg-input"]}></input></div>
  <div className="col-2"><button type="submit" className="btn btn-success button-2"><BiSolidCommentAdd /></button></div>
  </form>
  </div>
}
export default Addtodo;