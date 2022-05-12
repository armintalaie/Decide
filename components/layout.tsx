import type { NextPage } from "next";
import { Session } from "next-auth";
import { signIn, signOut, useSession } from "next-auth/react";
import { ReactNode } from "react";
import styles from "../styles/Home.module.css";

type LayoutProps = {
  children: ReactNode;
};

const authenticationButton = (session: Session | null) => {
  if (session) {
    return <button onClick={() => signOut()}>Sign Out</button>;
  } else {
    return <button onClick={() => signIn()}>Sign In</button>;
  }
};

const Layout = ({ children }: LayoutProps) => {
  const { data: session } = useSession();
  return (
    <div>
      <nav className={styles.header}>
        <h1>Decide</h1>
        {authenticationButton(session)}
      </nav>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
        </a>
      </footer>
    </div>
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
