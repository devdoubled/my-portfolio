/* eslint-disable @next/next/no-img-element */
import classNames from "classnames/bind";
import Image from "next/image";
import { ImQuotesLeft } from "react-icons/im";
import styles from "./HomeIntroduction.module.scss";
const cx = classNames.bind(styles);
export default function HomeIntroduction() {
  return (
    <div className={cx("home-introduction")}>
      <div className={cx("introduction-content")}>
        <div className={cx("self-bias")}>
          <div className={cx("bias-main")}>
            DuyLee is a{" "}
            <span className={cx("highlight")}>Full-Stack Developer</span>
          </div>
          <div className={cx("bias-detail")}>
            He is a problem solver with a keyboard, crafting backend logic,
            pixel-perfect UIs, and smooth mobile experiences.
          </div>
          <button className={cx("contact-btn")}>Contact me!!</button>
        </div>
        <div className={cx("self-avatar-wrapper")}>
          <div className={cx("self-avatar")}>
            <Image
              src="/images/avatar.png"
              width={600}
              height={600}
              alt="Picture of the author"
            />
            <div className={cx("avatar-desc")}>
              <div className={cx("shape")}></div>
              <span className={cx("text")}>
                Currently working on{" "}
                <span className={cx("highlight")}>Portfolio</span>
              </span>
            </div>
          </div>
          <img
            src="/images/logo-2.png"
            alt="self-logo"
            className={cx("self-logo-img")}
          />
        </div>
      </div>
      <div className={cx("introduction-quote")}>
        <div className={cx("quote-container")}>
          <div className={cx("quote-text")}>
            <ImQuotesLeft className={cx("quote-before")} />
            <p className={cx("text")}>
              If you are born poor, it’s not your mistake. But if you die poor,
              it’s your mistake.
            </p>
            <ImQuotesLeft className={cx("quote-after")} />
          </div>
          <div className={cx("quote-author")}>
            <div className={cx("author")}>
              <p className={cx("text")}>- Bill Gates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
