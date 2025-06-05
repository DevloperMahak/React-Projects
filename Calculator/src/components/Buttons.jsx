import styles from './Buttons.module.css';
const Buttons=({onbuttonclick})=>{
  const ButtonNames=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
return<>
<div className={styles.buttons}>
  {ButtonNames.map((btn)=>(<button className={styles.btn} onClick={()=>onbuttonclick(btn)}>{btn}</button>))}
</div>
</>
};
export default Buttons;