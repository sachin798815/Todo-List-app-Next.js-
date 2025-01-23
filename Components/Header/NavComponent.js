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
        <div className={styles.navCollapse}>
          <div className={styles.nav}>
            <div className={styles.navDropdown}>
              <button className={styles.dropdownToggle}>More</button>
              <div className={styles.dropdownMenu}>
                <a href="#action/3.1" className={styles.customNavDropdownItem}>
                  Profile
                </a>
                <a href="#action/3.2" className={styles.customNavDropdownItem}>
                  Settings
                </a>
                <div className={styles.dropdownDivider}></div>
                <a href="#action/3.3" className={styles.customNavDropdownItem}>
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavComponent;
