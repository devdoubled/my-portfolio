import classNames from "classnames/bind";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import Link from "next/link";
import styles from "./MobileNav.module.scss";
import { HEADER_NAV } from "@/constants/header_nav";
const cx = classNames.bind(styles);
interface MobileNavProps {
  pathname: string;
  onClose: () => void;
}
export default function MobileNav({ pathname, onClose }: MobileNavProps) {
  return (
    <div className={cx("mobile-nav-overlay")} onClick={onClose}>
      <div
        className={cx("mobile-nav-wrapper")}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={cx("header-nav")}>
          {HEADER_NAV.map((nav, index) => {
            const isActive = nav.exact
              ? pathname === nav.path
              : pathname.startsWith(nav.path);

            return (
              <Link
                href={nav.path}
                className={cx("header-nav-link", {
                  "header-nav-link--active": isActive,
                })}
                key={index}
              >
                <span className={cx("nav-sign")}>#</span>
                {nav.name}
              </Link>
            );
          })}
        </div>
        <div className={cx("header-social")}>
          <Link
            href="https://github.com/devdoubled"
            target="_blank"
            className={cx("social-link")}
          >
            <FaGithub className="w-7 h-7" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/devdd/"
            target="_blank"
            className={cx("social-link")}
          >
            <FaLinkedin className="w-7 h-7" />
          </Link>
          <Link
            href="https://www.facebook.com/leevuxx"
            target="_blank"
            className={cx("social-link")}
          >
            <FaFacebook className="w-7 h-7" />
          </Link>
        </div>
      </div>
    </div>
  );
}
