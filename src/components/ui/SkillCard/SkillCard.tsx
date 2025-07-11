import classNames from "classnames/bind";
import styles from "./SkillCard.module.scss";
const cx = classNames.bind(styles);

interface SkillCard {
  title: string;
  content: string;
  type: string;
}
export default function SkillCard({ title, content, type }: SkillCard) {
  return (
    <div
      className={cx("card-item", {
        normal: type === "normal",
        special: type !== "normal",
      })}
    >
      <div className={cx("title")}>{title}</div>
      <div className={cx("content")}>{content}</div>
    </div>
  );
}
