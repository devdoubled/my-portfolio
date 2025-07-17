import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import Image from "next/image";
const cx = classNames.bind(styles);
export default function Footer() {
  return (
    <footer className={cx("footer-wrapper")}>
      <div className={cx("footer-container")}>
        <div className={cx("footer-content")}>
          <div className={cx("footer-logo")}>
            <Image
              src="/images/logo.png"
              width={40}
              height={40}
              alt="Picture of the author"
            />
            <span className={cx("footer-logo-text")}>ev</span>
          </div>
          <div className={cx("footer-contact")}>duylvd2002@gmail.com</div>
        </div>
        <div className={cx("footer-detail")}>
          {/* Detail */}
          <div className={cx("footer-text")}>Full-Stack Developer</div>
          {/* Social Links */}
          <div className={cx("footer-social-links")}>
            <Link
              href="https://github.com/devdoubled"
              target="_blank"
              className={cx("footer-social-link")}
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/devdd/"
              target="_blank"
              className={cx("footer-social-link")}
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.facebook.com/devdoubled"
              target="_blank"
              className={cx("footer-social-link")}
              aria-label="Facebook"
            >
              <FaFacebook className="w-6 h-6" />
            </Link>
          </div>
        </div>
        {/* Copyright */}
        <div className={cx("footer-copyright")}>
          © Copyright {new Date().getFullYear()}. Made by DevDoubleD.
        </div>
      </div>
    </footer>
  );
}
