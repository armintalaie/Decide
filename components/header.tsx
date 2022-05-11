import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Header: NextPage = () => {
  return (
    <nav className={styles.header}>
      <h1>Decide</h1>
    </nav>
  );
};

export default Header;
