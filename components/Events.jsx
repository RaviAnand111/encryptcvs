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
      </div>

      <h2 className={styles.games}>GAMES</h2>

      <div className={styles.box}>
        <div className={styles.contentchild}>
          <ul>
            <li>FIFA’19</li>
            <li>PUBG</li>
            <li>Battlegrounds Mobile India</li>
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
            <li>MICROSOFT AZURE WEBINAR</li>
            <li>ROADMAP TO BECOME A DATA SCIENTIST</li>
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
            <li>COMPETITIVE PROGRAMMING</li>
            <li>BLIND CODING</li>
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
