/* eslint-disable @next/next/no-img-element */
import classNames from "classnames/bind";
import { FaGithub } from "react-icons/fa";
// import { RiCodeView } from "react-icons/ri";
import Link from "next/link";
import { ProjectItem } from "@/interfaces/project_item";

import styles from "./ProjectCard.module.scss";
const cx = classNames.bind(styles);

interface Props {
  project: ProjectItem;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className={cx("project-item")}>
      <div className={cx("project-image-container")}>
        <img src={project.image} alt="img" className={cx("project-image")} />
      </div>
      <div className={cx("project-stack")}>{project.stack}</div>
      <div className={cx("project-content")}>
        <div className={cx("project-name")}>{project.title}</div>
        <div className={cx("project-desc")}>
          <p className={cx("desc-text")}>{project.desc}</p>
        </div>
        <div className={cx("project-action")}>
          <Link
            href={project.link}
            target="_blank"
            className={cx("action-btn")}
          >
            <FaGithub className="w-5 h-5" />
            Github
          </Link>
          {/* <Link href="/" className={cx("view-btn")}>
            <RiCodeView className="w-5 h-5" />
            View
          </Link> */}
        </div>
      </div>
    </div>
  );
}
