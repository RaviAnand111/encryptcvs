import styles from "../styles/aboutencrypt.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faCode, faMobile, faHeart, faDesktop, faLaptopCode, faUserSecret } from "@fortawesome/free-solid-svg-icons"; // import the icons you need 

function AboutEncrypt(){
 return (
   <div className={styles.container}>
   <h2 className={styles.heading}>ABOUT US</h2>
   <p className={styles.content}>
       <span className={styles.e}>E</span>ncrypt-The tech society of CVS is no less than a convent for all the students who wish to excel in any field in this technology dominated world. It is a platform where all the students diligently work towards spreading technical education and awareness. Learning and subsequently polishing their own set of skills will help them take the world head on.
       <p className={styles.content}>
       <br></br>
       Therefore we invite you to become a part of the society and track the tech with us.</p>
    </p>

     <div className={styles.parent}>
       <FontAwesomeIcon className={styles.child} icon={faDesktop}></FontAwesomeIcon>
       <FontAwesomeIcon className={styles.child} icon={faLaptopCode}></FontAwesomeIcon>
       <FontAwesomeIcon className={styles.child} icon={faUserSecret}></FontAwesomeIcon>
     </div>

     <h2 className={styles.heading}>MISSION</h2>
     <p className={styles.content}>
       Our mission is to enlighten the students about the possibilities and opportunities that the technology can offer. We embark on this  journey from entertainment to employment and hope to make the students self sufficient in dealing with various aspects of the world. We aim at filling the void created by our ever updating world with knowledge and fun.
     </p>

   <p className={styles.content}> &quot;WE WANT TO CREATE A HEALTHY AND MOTIVATING TECHVIRONMENT&quot; </p>
   
     <div className={styles.parent}>
       <FontAwesomeIcon className={styles.child} icon={faCode}></FontAwesomeIcon>
       <FontAwesomeIcon className={styles.child} icon={faHeart}></FontAwesomeIcon>
       <FontAwesomeIcon className={styles.child} icon={faMobile}></FontAwesomeIcon>
     </div> 

   

   </div>
 )
}

export default AboutEncrypt;