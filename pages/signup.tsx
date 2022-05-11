import type { NextPage } from "next";
import styles from "@/styles/Home.module.css";

const SignUp: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2 className={styles.heading}>SignUp</h2>
        <div className={styles.grid}>
          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples</h2>
          </a>
          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples</h2>
          </a>
          <button className={styles.button}>
            <h2>New Team</h2>
          </button>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
