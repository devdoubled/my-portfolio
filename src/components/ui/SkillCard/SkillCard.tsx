import classNames from "classnames/bind";
import styles from "./SkillCard.module.scss";
const cx = classNames.bind(styles);

interface SkillCard {
  title: string;
  content: string;
}
export default function SkillCard({ title, content }: SkillCard) {
  return (
    <div className={cx("card-item")}>
      <div className={cx("title")}>{title}</div>
      <div className={cx("content")}>{content}</div>
    </div>
  );
}
