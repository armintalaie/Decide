import type { NextPage } from "next";
import { ReactNode } from "react";
import styles from "../styles/Home.module.css";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <nav className={styles.header}>
        <h1>Decide</h1>
      </nav>
      <main style={{ minHeight: "80%" }}>{children}</main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
        </a>
      </footer>
    </>
  );
};

const Toggle = () => {
  return (
    <div className={styles.toggle}>
      <div className={styles.toggleSwitch}></div>
    </div>
  );
};

export default Layout;
