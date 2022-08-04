import { useRouter } from "next/router"
import Members from "../components/Members";
import Navbar from "../components/Navbar";
import styles from "../styles/year.module.css"
const year = () => {
    const router = useRouter();
    const pageYear = router.query.year;
    return (
        <>
        <Navbar/>
          <div className={styles.title}> Year {pageYear}</div> 
          <div>
          <Members/>
          </div>
        </>
    )
}

export default year
