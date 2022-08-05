import styles from "../styles/cards.module.css";

const Card = (props) => {


 return (
  <>
   <div className={styles.card}>
   <h2  className={styles.dept}>{props.content}</h2>
  </div>
  </>
 )
}

export default Card;