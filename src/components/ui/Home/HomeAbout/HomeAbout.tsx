import classNames from "classnames/bind";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import styles from "./HomeAbout.module.scss";
const cx = classNames.bind(styles);

export default function HomeAbout() {
  return (
    <div className={cx("home-about")}>
      <div className={cx("home-about-title")}>
        <span className={cx("sign")}>#</span>
        <span className={cx("text")}>about-me</span>
        <div className={cx("line")}></div>
      </div>
      <div className={cx("home-about-content")}>
        <div className={cx("about-script")}>
          <p className={cx("script-text")}>Hello! I’m DuyLee 👋</p>
          <p className={cx("script-text")}>
            I’m a self-taught full-stack developer with a passion for building
            robust, scalable web and mobile applications. From sleek frontends
            to powerful backends, I love turning ideas into fully functional,
            real-world products using modern technologies.
          </p>
          <p className={cx("script-text")}>
            I have hands-on experience designing and developing backend systems
            with a microservices architecture. I enjoy applying the latest
            technologies — like gRPC, GraphQL, message brokers, and
            containerization — to build services that are efficient,
            maintainable, and ready to scale.
          </p>
          <p className={cx("script-text")}>
            I’m always ready to take on new challenges and contribute my skills
            to projects that make a real impact. Let’s connect and create
            something exceptional together.
          </p>
          <button className={cx("readmore-btn")}>
            Read more
            <MdKeyboardDoubleArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
