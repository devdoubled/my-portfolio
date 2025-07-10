import classNames from "classnames/bind";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { SmallProjectItem } from "@/interfaces/small_project_item";

import styles from "./ProjectSmallCard.module.scss";
const cx = classNames.bind(styles);

interface Props {
  project: SmallProjectItem;
}
export default function ProjectSmallCard({ project }: Props) {
  return (
    <div className={cx("card-item")}>
      <div className={cx("stack")}>{project.stack}</div>
      <div className={cx("content")}>
        <div className={cx("name")}>{project.name}</div>
        <div className={cx("desc")}>
          <div className={cx("text")}>{project.desc}</div>
        </div>
        <div className={cx("action")}>
          <Link
            href={project.link}
            target="_blank"
            className={cx("action-btn")}
          >
            <FaGithub className="w-4 h-4" />
            Github
          </Link>
        </div>
      </div>
    </div>
  );
}
