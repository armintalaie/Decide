import prisma from "lib/prisma";
import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../../components/footer";
import Header from "../../components/header";
import styles from "../../styles/Home.module.css";

const Teams: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2 className={styles.heading}>Teams</h2>
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

export default Teams;
