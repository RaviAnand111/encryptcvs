import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Members from "../components/Members";
import styles from "../styles/index.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AboutEncrypt from "../components/AboutEncrypt";
import Events from "../components/Events";
import Particles from "react-tsparticles";
import Departments from "../components/Departments";
import Footer from "../components/Footer";
import { useRef } from "react";

export default function Home() {
  const homeRef = useRef(null);
  const aboutusRef = useRef(null);
  const missionRef = useRef(null);
  const departmentsRef = useRef(null);
  const eventsRef = useRef(null);

  const particlesInit = (main) => {
    console.log(main);

  };

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        ></link>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          particles: {
            number: {
              value: 90,
              density: {
                enable: true,
                value_area: 1200,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false,
                mode: "repulse",
              },
              onclick: {
                enable: false,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      ></Particles>

      {/* <Navbar /> */}

      <div className={styles.main} ref={homeRef}>
        <div className={styles.main_content}>
          <p className={styles.we}> We are </p>
          <div className={styles.enc_box}>
            <p className={styles.encrypt}> ENCRYPT </p>
          </div>
          <hr className={styles.hr} />
          <p className={styles.content}>
            The Tech Society of College of Vocational Studies
          </p>
          <div className={styles.arrow_div}>
            <KeyboardArrowDownIcon className={styles.arrow} />
          </div>
        </div>

        <AboutEncrypt aboutusRef={aboutusRef} missionRef={missionRef} />
        <Events eventsRef={eventsRef} />

        <Departments departmentsRef={departmentsRef} />
      </div>
      <Footer
        homeRef={homeRef}
        aboutusRef={aboutusRef}
        missionRef={missionRef}
        eventsRef={eventsRef}
        departmentsRef={departmentsRef}
      />
    </>
  );
}
