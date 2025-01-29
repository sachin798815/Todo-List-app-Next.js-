import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../Header/NavComponent.module.css";

const NavComponent = () => {
  const router = useRouter();

  return (
    <nav className={styles.customNavbar}>
      <div className={styles.container}>
        <a href="#home" className={styles.customNavbarBrand}>
          Todo List
        </a>
        <div className={styles.navLeft}>
          <Link
            href="/"
            className={`${styles.customNavLink} ${
              router.pathname === "/" ? styles.activeLink : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/completed-todos"
            className={`${styles.customNavLink} ${
              router.pathname === "/completed-todos" ? styles.activeLink : ""
            }`}
          >
            Completed Todos
          </Link>
          <Link
            href="/about"
            className={`${styles.customNavLink} ${
              router.pathname === "/about" ? styles.activeLink : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`${styles.customNavLink} ${
              router.pathname === "/contact" ? styles.activeLink : ""
            }`}
          >
            Contact
          </Link>
        </div>
        <div className={styles.navToggle}>☰</div>
      </div>
    </nav>
  );
};

export default NavComponent;
