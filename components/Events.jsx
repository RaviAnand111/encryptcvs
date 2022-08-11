import styles from "../styles/events.module.css";
import Card from "../components/Card";

function Events({ eventsRef }) {
  return (
    <div className={styles.container} ref={eventsRef}>
      <div className={styles.events_container}>
        <h2 className={styles.events}>Events</h2>
        <div className={styles.events_card_container}>
          <Card content="Technophilia" />
          <Card content="Codotsav" />
          <Card content="Technex" />
        </div>
        <div className={styles.events_table}>
          <p>Technophilia</p>
          <p>Codotsav</p>
          <p>Technex</p>
        </div>
      </div>

      <h2 className={styles.games}>GAMES</h2>

      <div className={styles.box}>
        <div className={styles.contentchild}>
          <ul>
            <li>FIFA’19</li>
            <li>PUBG</li>
            <li>Battlegrounds Mobile India</li>
            <li>Call of Duty Mobile</li>
            <li>Counter Strike</li>
            <li>Debate Battle</li>
            <li>Geek Hunt</li>
            <li>Comic Concert</li>
          </ul>
        </div>

        <div className={styles.imgchild}>
          <img src="game-1.jpg" alt="game" className={styles.img1}></img>
          <img src="game-2.jpg" alt="game" className={styles.img2}></img>
        </div>
      </div>
      <h2 className={styles.webinar}>WEBINAR</h2>

      <div className={styles.box}>
        <div className={styles.contentchild}>
          <ul>
            <li>DSA for your Dream Company</li>
            <li>Blockchain & NFT</li>
            <li>Microsoft Azure</li>
            <li>How to be a Data Scientist</li>
          </ul>
        </div>
        <div className={styles.imgchild}>
          <img src="/webinar_1.jpg" alt="game" className={styles.img1}></img>
          <img src="/webinar_2.jpg" alt="game" className={styles.img2}></img>
        </div>
      </div>
      <h2 className={styles.codingEvents}>CODING EVENTS</h2>

      <div className={styles.box}>
        <div className={styles.contentchild}>
          <ul>
            <li>Competitive Programming</li>
            <li>Blind Coding</li>
          </ul>
        </div>

        <div className={styles.imgchild}>
          <img src="/coding_1.jpg" alt="game" className={styles.img1}></img>
          <img src="/coding_2.jpg" alt="game" className={styles.img2}></img>
        </div>
      </div>
      {/* <h2 className={styles.muchMore}>AND MUCH MORE...</h2> */}
    </div>
  );
}

export default Events;
