import React from "react";
import Link from "next/link";

import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <header className={styles.container}>
      <div className={styles.menu}>
        <div className={styles.menuItem}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
        <div className={styles.menuItem}>
          <Link href="/work">
            <a>Work</a>
          </Link>
        </div>
        <div className={styles.menuItem}>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
        <div className={styles.menuItem}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
