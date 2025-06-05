import styles from './Welcome.module.css';
import { Todoitemscontext } from '../store/todoitem-store';
import { useContext } from 'react';
const Welcomemessage=()=>{
  const {todoitems}=useContext(Todoitemscontext);
return(todoitems.length===0 && <p className={styles.message}>Enjoy your day</p>);
};
export default Welcomemessage;