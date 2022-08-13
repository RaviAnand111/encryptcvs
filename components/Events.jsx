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
      <div className={styles.all_events}>
        <div className={styles.games_container}>
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
          </div>
        </div>
        <div className={styles.webinar_container}>
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
          </div>
        </div>
        <div className={styles.coding_container}>
          <h2 className={styles.codingEvents}>CODING EVENTS</h2>

          <div className={styles.box}>
            <div className={styles.contentchild}>
              <ul>
                <li>Competitive Programming</li>
                <li>Blind Coding</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
