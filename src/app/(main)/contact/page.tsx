import classNames from "classnames/bind";
import styles from "./Contact.module.scss";
import { IoIosMail } from "react-icons/io";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";
const cx = classNames.bind(styles);

export default function Contact() {
  return (
    <div className={cx("contact-wrapper")}>
      <div className={cx("contact-title")}>
        <div className={cx("main")}>
          <span className={cx("sign")}>/</span>
          <span className={cx("text")}>contacts</span>
        </div>
        <div className={cx("sub")}>Who am i?</div>
      </div>
      <div className={cx("contact-content")}>
        <div className={cx("contact-script")}>
          <p className={cx("script-text")}>
            I’m interested in freelance opportunities and open to joining a
            great company team as well. If you have any requests, ideas, or
            questions, don’t hesitate to reach out — I’d love to connect!
          </p>
        </div>
        <div className={cx("contact-message")}>
          <div className={cx("message-title")}>Message me here</div>
          <div className={cx("message-mail")}>
            <IoIosMail className="w-6 h-6" />
            <p>duylvd2002@gmail.com</p>
          </div>
          <div className={cx("message-item")}>
            <FaLinkedin className="w-6 h-6" />
            <Link
              href="https://www.linkedin.com/in/devdd/"
              target="_blank"
              aria-label="Linkedin"
            >
              Duy Lee
            </Link>
          </div>
          <div className={cx("message-item")}>
            <FaFacebook className="w-6 h-6" />
            <Link
              href="https://www.facebook.com/leevuxx"
              target="_blank"
              aria-label="Facebook"
            >
              Đình Duy
            </Link>
          </div>
        </div>
      </div>
      <div className={cx("contact-media")}>
        <div className={cx("media-title")}>
          <span className={cx("sign")}>#</span>
          <span className={cx("text")}>all-media</span>
        </div>
        <div className={cx("media-list")}>
          <Link
            href="https://github.com/devdoubled"
            target="_blank"
            className={cx("media")}
            aria-label="GitHub"
          >
            <FaGithub className="w-6 h-6" />
            <span className={cx("text")}>@Duy Lee</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/devdd/"
            target="_blank"
            className={cx("media")}
            aria-label="GitHub"
          >
            <FaLinkedin className="w-6 h-6" />
            <span className={cx("text")}>@Duy Lee</span>
          </Link>
          <Link
            href="https://www.facebook.com/leevuxx"
            target="_blank"
            className={cx("media")}
            aria-label="GitHub"
          >
            <FaFacebook className="w-6 h-6" />
            <span className={cx("text")}>@Đình Duy</span>
          </Link>
          <Link
            href="https://www.instagram.com/eelvuxx/"
            target="_blank"
            className={cx("media")}
            aria-label="GitHub"
          >
            <FaInstagram className="w-6 h-6" />
            <span className={cx("text")}>@eelvuxx</span>
          </Link>
          <Link
            href="https://x.com/DevDoubleD"
            target="_blank"
            className={cx("media")}
            aria-label="GitHub"
          >
            <BsTwitterX className="w-6 h-6" />
            <span className={cx("text")}>@DevDD</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
