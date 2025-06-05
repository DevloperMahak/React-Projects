
import styles from './Item.module.css';
const Items=({fooditems,bought,handlingBuy})=>{
return(
<li className={`${styles["mg-item"]} list-group-item ${bought && "active"}`}><span className={styles["mg-span"]}>{fooditems}</span><button className={`${styles.button} btn btn-info`} onClick={handlingBuy}>Buy</button></li>
);
};
export default Items;