"use client";

import classNames from "classnames/bind";
import Link from "next/link";
import styles from "./Header.module.scss";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HEADER_NAV } from "@/constants/header_nav";
const cx = classNames.bind(styles);
export default function Header() {
  const pathname = usePathname();

  return (
    <header className={cx("header-wrapper")}>
      <div className={cx("header-container")}>
        {/* Logo */}
        <Link href="/" className={cx("header-logo")}>
          <Image
            src="/images/logo.png"
            width={40}
            height={40}
            alt="Picture of the author"
          />
          <span className={cx("header-logo-text")}>ev</span>
        </Link>
        {/* Navigation */}
        <nav className={cx("header-nav")}>
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
        </nav>
      </div>
    </header>
  );
}
