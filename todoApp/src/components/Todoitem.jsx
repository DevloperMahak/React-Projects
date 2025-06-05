import { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Todoitemscontext } from "../store/todoitem-store";
function Todoitem({todoname,tododate}){
  const {deleteitem}=useContext(Todoitemscontext);
  return<div className="row row-2">
  <div className="col-6">{todoname}</div>
  <div className="col-4">{tododate}</div>
  <div className="col-2"><button type="button" className="btn btn-danger button-2" onClick={()=>deleteitem(todoname)}><RiDeleteBin6Line /></button></div>
</div>
}
export default Todoitem ;