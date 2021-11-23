import Link from "next/link";
import styled from "./Header.module.css";
import { FaDev } from "react-icons/fa";

export function Header() {
  return (
    <header className={styled.header}>
      <Link href="/">
        <a className={styled.link}>
          Khoudir Yaya . <FaDev className={styled.icon} />
        </a>
      </Link>
      <Link href="/projects">
        <a className={styled.link}>Projects</a>
      </Link>
      <Link href="/contact">
        <a className={styled.link}>Contact</a>
      </Link>
    </header>
  );
}
