import styles from "../styles/departments.module.css";

const Card = (props) => {


 return (
  <>
   <div className={styles.card}>
   <h2  className={styles.dept}>{props.dept}</h2>
  </div>
  </>
 )
}

export default Card;