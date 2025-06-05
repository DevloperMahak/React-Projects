import {useState} from "react";
import Buttons from './components/Buttons'
import styles from './App.module.css';
import Display from './components/Display';
function App() {
  const onbuttonclick=(buttonText)=>{
    if(buttonText==='C'){
     setDisplayval("");
    }
    else if(buttonText==='='){
    const result=eval(Displayval);
    setDisplayval(result);
    }
    else{
      const newDisplayval=Displayval+buttonText;
      setDisplayval(newDisplayval);
    }
  }
  let [Displayval,setDisplayval] = useState("");

return<><div className={styles["calculator"]}>
   <Display calval={Displayval}></Display>
   <Buttons onbuttonclick={onbuttonclick}></Buttons>
  </div>
  </> 
}

export default App;
