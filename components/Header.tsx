import Link from "next/link";
import styled from "./Header.module.css";

export function Header() {
  return (
    <header className={styled.header}>
      <Link href="/">
        <a>Khoudir Yaya</a>
      </Link>
      <Link href="/projects">
        <a>Projects</a>
      </Link>
      <Link href="/contact">
        <a>contact</a>
      </Link>
    </header>
  );
}
