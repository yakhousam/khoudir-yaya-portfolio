import styles from "./Layout.module.css";
import { Header } from "../components/Header";

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  );
}
