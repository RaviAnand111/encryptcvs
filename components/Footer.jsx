import styles from "../styles/footer.module.css";
import { FiInstagram } from "react-icons/fi";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <div className={styles.banner}>
      {/* Address Part */}
      <div className={styles.address}>
        <p>+91 1234567891</p>
        <p> Kriti Arora </p>
        <br />
        <p>encryptcvs@gmail.com</p>
        <p> College of Vocational Studies </p>
        <p> Triveni, Sheikh Sarai-II </p>
        <p> New Delhi - 110017 </p>
      </div>

      {/* menu  */}
      <div className={styles.menu}>
        <p>HOME</p>
        <p>ABOUT US</p>
        <p>MISSION</p>
        <p>DEPARTMENTS</p>
        <p>EVENTS</p>
      </div>

      {/* contact  */}
      <div className={styles.contact}>
        <p className={styles.connect}>Connect with Us</p>
        <div className={styles.socials}>
          <FiInstagram size={40} className={styles.insta}/>
          <BsFacebook size={40} className={styles.fb}/>
          <BsLinkedin size={40} className={styles.linkedin}/>
          <SiGmail size={40} className={styles.mail}/>
        </div>
      </div>
    </div>
  );
}

export default Footer;
