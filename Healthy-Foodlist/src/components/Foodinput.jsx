import styles from './Foodinput.module.css'
const Foodinput=({handleonchange,handlekeydown})=>{
return<input type="text" placeholder="Enter Food Item Here" className={styles.input} onChange={handleonchange} onKeyDown={handlekeydown}></input>
};
export default Foodinput;