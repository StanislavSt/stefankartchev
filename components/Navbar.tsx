import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const { pathname } = useRouter();
  console.log(pathname);
  return (
    <header className={styles.container}>
      <div className={styles.menu}>
        <div className={styles.menuItem}>
          <a>цъкни!</a>
        </div>
        <div className={styles.rightSide}>
          {pathname !== "/" ? (
            <div className={styles.menuItem}>
              <Link href="/">
                <a>home</a>
              </Link>
            </div>
          ) : null}
          <div className={styles.menuItem}>
            <Link href="/work">
              <a>work</a>
            </Link>
          </div>
          <div className={styles.menuItem}>
            <Link href="/contact">
              <a>contact</a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
