import { useState } from "react";
import styled from "styled-components";
import styles from "../styles/navbar.module.css";
// import HomeIcon from "@mui/icons-material/Home";
// import EventIcon from "@mui/icons-material/Event";
import { RiCloseLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const Menu = () => (
    <>
      <Link href="/">
        <a>
          <span>HOME</span>
        </a>
      </Link>
      <Link href="/events">
        <a>
          <span>EVENTS</span>
        </a>
      </Link>
      <Link href="/">
        {/* <a className={styles.special_event}> */}
        <a>
          <span>RECRUITMENT</span>
        </a>
      </Link>
      <Link href="/alumni">
        <a>
          <span>ALUMNI</span>
        </a>
      </Link>
      <Link href="/">
        <a>
          <span>GALLERY</span>
        </a>
      </Link>
    </>
  );

  return (
    <div className={styles.nav}>
      {/* <Logo src="enc-logo.png" /> */}
      <div className={styles.nav_menu}>
        <Menu />
      </div>
      <div className={styles.nav_links}>
        {toggleMenu ? (
          <RiCloseLine size={40} onClick={() => setToggleMenu(false)} className={` ${styles.icons}  ${styles.cls_line}`}/>
        ) : (
          <GiHamburgerMenu size={35} onClick={() => setToggleMenu(true)} className={`${styles.icons} ${styles.hamburger}`}/>
        )}
        {toggleMenu && (
          <div className={styles.nav_menu_wrapper}>
            <Menu />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
