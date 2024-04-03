import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div >
        <h1>UpInTheAir</h1>
        <div className={styles.buttons}>
          <button>Our Work</button>
          <button>Our Story</button>
        </div>
      </div>
      <video src={require("../assets/above-the-clouds.mp4")} autoPlay muted className={styles.video} />
    </main>
  );
}
