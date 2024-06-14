import Image from "next/image";
import styles from "./page.module.css";
import Knight from "./components/Knight";

export default function Home() {
  return (
    <main className={styles.main}>
      <Knight />
    </main>
  );
}
