import classNames from "classnames/bind";
import { FaCode } from "react-icons/fa6";
import styles from "./HomeProject.module.scss";
import ProjectCard from "../../ProjectCard/ProjectCard";
import { TOP_PROJECTS } from "@/constants/projects";
import Link from "next/link";
const cx = classNames.bind(styles);
export default function HomeProject() {
  return (
    <div className={cx("home-project")}>
      <div className={cx("home-project-title")}>
        <div className={cx("title-content")}>
          <span className={cx("sign")}>#</span>
          <span className={cx("text")}>projects</span>
          <div className={cx("line")}></div>
        </div>
        <Link href="/projects" className={cx("view-all")}>
          <span>View all</span>
          <FaCode />
        </Link>
      </div>
      <div className={cx("home-project-list")}>
        {TOP_PROJECTS.map((project, _index) => (
          <ProjectCard key={_index} project={project} />
        ))}
      </div>
    </div>
  );
}
