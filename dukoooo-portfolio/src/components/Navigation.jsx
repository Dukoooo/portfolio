import styles from "./Navigation.module.css";
import { Link } from "react-scroll";
import logo from "../assets/jg.png";

import { useState, useRef, useEffect } from "react";

function Navigation() {
  const [openMenu, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  function handleToggle() {
    setIsOpen(!openMenu);
  }

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [openMenu]);

  return (
    <header className="header container">
      <nav className={styles.navbar} ref={menuRef}>
        <Link>
          <img src={logo} alt="logo" className={styles.logo} />
        </Link>
        <ul
          className={`${styles.list} ${openMenu ? styles.open : styles.close} `}
        >
          <li className={styles.item}>
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className={styles.item}>
            {" "}
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              About me
            </Link>
          </li>
          <li className={styles.item}>
            {" "}
            <Link
              to="jurney"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Jurney
            </Link>
          </li>
          <li className={styles.item}>
            {" "}
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li className={styles.item}>
            {" "}
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
        <label htmlFor="check" className={styles.navcheck}>
          <input
            type="checkbox"
            id="check"
            className={styles.checkBtn}
            checked={openMenu}
            onChange={handleToggle}
          />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </nav>
    </header>
  );
}

export default Navigation;
