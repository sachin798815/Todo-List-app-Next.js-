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
          <Link href="/" passHref>
            <a
              className={`${styles.customNavLink} ${
                router.pathname === "/" ? styles.activeLink : ""
              }`}
            >
              Todos
            </a>
          </Link>
          <Link href="/completed-todos" passHref>
            <a
              className={`${styles.customNavLink} ${
                router.pathname === "/completed-todos" ? styles.activeLink : ""
              }`}
            >
              Completed Todos
            </a>
          </Link>
          <Link href="/about" passHref>
            <a
              className={`${styles.customNavLink} ${
                router.pathname === "/about" ? styles.activeLink : ""
              }`}
            >
              About
            </a>
          </Link>
          <Link href="/contact" passHref>
            <a
              className={`${styles.customNavLink} ${
                router.pathname === "/contact" ? styles.activeLink : ""
              }`}
            >
              Contact
            </a>
          </Link>
        </div>
        <div className={styles.navToggle}>☰</div>
      </div>
    </nav>
  );
};

export default NavComponent;
