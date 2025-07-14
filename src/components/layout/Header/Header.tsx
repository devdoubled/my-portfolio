/* eslint-disable @next/next/no-img-element */
"use client";

import classNames from "classnames/bind";
import Link from "next/link";
import styles from "./Header.module.scss";
import { usePathname } from "next/navigation";
import { HiOutlineViewList } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { HEADER_NAV } from "@/constants/header_nav";
import { useEffect, useState } from "react";
import MobileNav from "@/components/ui/MobileNav";
const cx = classNames.bind(styles);
export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={cx("header-wrapper")}>
      <div className={cx("header-container")}>
        {/* Logo */}
        <Link href="/" className={cx("header-logo")}>
          <img
            src="/images/logo.png"
            alt="Picture of the author"
            className={cx("logo-img")}
          />
          <span className={cx("header-logo-text")}>ev</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className={cx("mobile-menu-btn")}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <IoMdClose className="w-6 h-6" />
          ) : (
            <HiOutlineViewList className="w-6 h-6" />
          )}
        </button>

        {isMenuOpen && (
          <MobileNav pathname={pathname} onClose={() => setIsMenuOpen(false)} />
        )}

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
    </div>
  );
}
