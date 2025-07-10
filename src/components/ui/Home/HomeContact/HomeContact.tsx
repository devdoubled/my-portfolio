import classNames from "classnames/bind";
import { IoIosMail } from "react-icons/io";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import styles from "./HomeContact.module.scss";
const cx = classNames.bind(styles);
export default function HomeContact() {
  return (
    <div className={cx("home-contact")}>
      <div className={cx("home-contact-title")}>
        <span className={cx("sign")}>#</span>
        <span className={cx("text")}>contact</span>
        <div className={cx("line")}></div>
      </div>
      <div className={cx("home-contact-content")}>
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
    </div>
  );
}
