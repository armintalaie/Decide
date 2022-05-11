import type { NextPage } from "next";
import styles from "@/styles/Home.module.css";
import Field from "@/components/field";

const SignIn: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2 className={styles.heading}>Sign in</h2>
        <div className={styles.grid}>
          <form className={styles.grid} onSubmit={() => {}}>
            <Field placeHolder="Email Address" />
            <Field placeHolder="Password" />
          </form>
          <button className={styles.button}>Sign in</button>
        </div>
      </main>
    </div>
  );
};

export default SignIn;
