import styles from "./Footer.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <ul className={styles.footer__container__links}>
          <li className={styles.footer__container__links_link}>
            <Link href="/policy">
              <a>Policy</a>
            </Link>
          </li>
          <li className={styles.footer__container__links_link}>
            <Link href="/terms">
              <a>Terms</a>
            </Link>
          </li>
          <li className={styles.footer__container__links_link}>
            <Link href="/contact">Contact</Link>
          </li>
          <li className={styles.footer__container__links_link}>
            <Link href="https://www.instagram.com/dirtebirdrags/">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
