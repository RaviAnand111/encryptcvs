import styles from "../styles/cards.module.css";

const Card = ({content}) => {


 return (
  <>
   <div className={styles.card}>
   <h2  className={styles.dept}>{content}</h2>
  </div>
  </>
 )
}

export default Card;