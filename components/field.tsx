import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";

interface FieldProps {
  placeHolder: string;
  fieldtype?: string;
}

const Field: NextPage<FieldProps> = (props) => {
  return (
    <input className={styles.card} placeholder={props.placeHolder}></input>
  );
};

export default Field;
