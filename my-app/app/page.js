import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
    {/* NavBar */}
    <div className={styles.navBar}>
      <span className={styles.logo}>
        <Image
          src="/logo.png"
          alt="Logo"
          width={50}
          height={50}
        />
      </span>

      <span className={styles.headerText}>
        <h1>Swine Applied Innovations Lab</h1>
      </span>

      <span className={styles.quickAccess}>
        <button>About Us</button>
        <button>Contact Us</button>
        <button>Blog</button>
        <button>Projects</button>
      </span>
    </div>

    {/* Body */}
      <div className={styles.body}>
        <h1 className={styles.goal}>Our Goal</h1>
        <br></br>
        <p className={styles.goalDescription}>To <strong>develop</strong> innovative solutions to complex questions by <strong>applying</strong> scientific knowledge and <strong>implementing</strong> emerging technologies.</p>
      </div>



    {/* Footer */}
    <div className={styles.footer}>

    </div>
    </>
  );
}
