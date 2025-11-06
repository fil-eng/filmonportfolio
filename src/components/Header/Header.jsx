import { Link } from "react-router-dom";
import logo from "../../assets/Logo.jpg";
import styles from "./Header.module.css";
import { NavHashLink } from "react-router-hash-link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.headerwrapper}>
        <div className={styles.logo}>
          {/* <Link href={''}><img src={logo} alt={'logo'} /></Link> */}
        </div>
        <nav className={styles.disknav}>
          <ul>
            <li>
              <NavHashLink to="/#home" smooth>
                Home
              </NavHashLink>
            </li>
            <li>
              <NavHashLink to="/#about" smooth>
                About
              </NavHashLink>
            </li>
            <li>
              <NavHashLink to="/#portfolio" smooth>
                Projects
              </NavHashLink>
            </li>
            <li>
              <NavHashLink to="/#contact" smooth>
                Contact
              </NavHashLink>
            </li>
          </ul>
        </nav>
        {isOpen && (
          <div className={styles.mobilenavwraper}>
            <FaTimes
              color="black"
              onClick={() => {
                setOpen(!isOpen);
              }}
              className={`${styles.faTimes} ${styles.icon}`}
            />
            <nav className={styles.mobilenav}>
              <ul>
                <li
                  onClick={() => {
                    setOpen(!isOpen);
                  }}
                >
                  <NavHashLink to="/#home" smooth>
                    Home
                  </NavHashLink>
                </li>
                <li
                  onClick={() => {
                    setOpen(!isOpen);
                  }}
                >
                  <NavHashLink to="/#about" smooth>
                    About
                  </NavHashLink>
                </li>
                <li
                  onClick={() => {
                    setOpen(!isOpen);
                  }}
                >
                  <NavHashLink to="/#portfolio" smooth>
                    Projects
                  </NavHashLink>
                </li>
                <li
                  onClick={() => {
                    setOpen(!isOpen);
                  }}
                >
                  <NavHashLink to="/#contact" smooth>
                    Contact
                  </NavHashLink>
                </li>
              </ul>
            </nav>
          </div>
        )}
        <div className={styles.Hamburger}>
          <FaBars
            onClick={() => {
              setOpen(!isOpen);
            }}
            className={styles.icon}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
