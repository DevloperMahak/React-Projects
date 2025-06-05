import AppName from "./components/AppName"
import Addtodo from "./components/Addtodo"
import "./App.css";
import Todoitems from "./components/Todoitems";
import Welcomemessage from "./components/Welcomemessage";
import TodoitemscontextProvider from "./store/todoitem-store";
import Container from "./components/container";
<App className="css"></App>

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
  
function App() {
  return(
    <Container>
    <TodoitemscontextProvider>
   <center className="container">
      <AppName></AppName>
      <Addtodo></Addtodo>
      <Welcomemessage></Welcomemessage>
      <Todoitems></Todoitems>
  </center>
  </TodoitemscontextProvider>
  </Container>
  );
}

export default App;
