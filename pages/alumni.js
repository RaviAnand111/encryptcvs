import Navbar from "../components/Navbar";
import styles from "../styles/alumni.module.css"
import Link from "next/link";


const alumni = () => {
  return (
    <>
      <Navbar />
      <div className={styles.text}> Remember The Name </div>
      
      <div className={styles.parent}>
        <Link href="/2021">
        <a>
        <div className={styles.child}>
          <p className={styles.para}>2021</p>
        </div>
        </a>
        </Link>
        <Link href="/2020">
        <a>
        <div className={styles.child}>
          <p className={styles.para}>2020</p>
        </div>
        </a>
        </Link>
        <Link href="/2019">
        <a>
        <div className={styles.child}>
          <p className={styles.para}>2019</p>
        </div>
        </a>
        </Link>
        <Link href="/2018">
        <a>
        <div className={styles.child}>
          <p className={styles.para}>2018</p>
        </div>
        </a>
        </Link>
        <Link href="/2017">
        <a>
        <div className={styles.child}>
          <p className={styles.para}>2017</p>
        </div>
        </a>
        </Link>
        <Link href="/2016">
        <a>
        <div className={styles.child}>
          <p className={styles.para}>2016</p>
        </div>
        </a>
        </Link>
      </div>
    </>
  );
};

export default alumni;
