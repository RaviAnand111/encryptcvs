import styles from "../styles/footer.module.css";
import { FiInstagram } from "react-icons/fi";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import Link from "next/link";

function Footer({
  homeRef,
  aboutusRef,
  missionRef,
  eventsRef,
  departmentsRef,
}) {
  return (
    <div className={styles.banner}>
      {/* Address Part */}
      <div className={styles.address}>
        <div className={styles.executive_contact}>
          <p className={styles.number}>+91 1234567891</p>
          <p>
            {" "}
            Kriti Khanna (<i>President</i>)
          </p>
        </div>
        <p>
          <Link href="mailto: encryptcvs@gmail.com">
            <a target="_blank">encryptcvs@gmail.com</a>
          </Link>
        </p>
        <p> College of Vocational Studies </p>
        <p> Triveni, Sheikh Sarai-II </p>
        <p> New Delhi - 110017 </p>
      </div>

      {/* menu  */}
      <div className={styles.menu}>
        <p onClick={() => homeRef.current.scrollIntoView()}>HOME</p>
        <p onClick={() => aboutusRef.current.scrollIntoView()}>ABOUT US</p>
        <p onClick={() => missionRef.current.scrollIntoView()}>MISSION</p>
        <p onClick={() => departmentsRef.current.scrollIntoView()}>
          DEPARTMENTS
        </p>
        <p onClick={() => eventsRef.current.scrollIntoView()}>EVENTS</p>
      </div>

      {/* contact  */}
      <div className={styles.contact}>
        <p className={styles.connect}>Connect with Us</p>
        <div className={styles.socials}>
          <Link href="https://www.instagram.com/encryptcvs/">
            <a target="_blank">
              <FiInstagram size={30} className={styles.insta} />
            </a>
          </Link>

          <Link href="https://www.facebook.com/encryptcvs/">
            <a target="_blank">
              <BsFacebook size={30} className={styles.fb} />
            </a>
          </Link>

          <Link href="https://www.linkedin.com/company/encrypt-the-tech-society-of-college-of-vocational-studies/?originalSubdomain=in">
            <a target="_blank">
              <BsLinkedin size={30} className={styles.linkedin} />
            </a>
          </Link>

          <Link href="mailto:encryptcvs@gmail.com">
            <a target="_blank">
              <SiGmail size={30} className={styles.mail} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
