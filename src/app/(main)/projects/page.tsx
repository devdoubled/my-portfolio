import classNames from "classnames/bind";
import styles from "./Project.module.scss";
import ProjectCard from "@/components/ui/ProjectCard/ProjectCard";
import { PROJECTS, SMALL_PROJECTS } from "@/constants/projects";
import ProjectSmallCard from "@/components/ui/ProjectSmallCard";
const cx = classNames.bind(styles);
export default function Project() {
  return (
    <div className={cx("project-wrapper")}>
      <div className={cx("project-title")}>
        <div className={cx("main")}>
          <span className={cx("sign")}>/</span>
          <span className={cx("text")}>projects</span>
        </div>
        <div className={cx("sub")}>List of my projects</div>
      </div>
      <div className={cx("project-complete")}>
        <div className={cx("complete-title")}>
          <span className={cx("sign")}>#</span>
          <span className={cx("text")}>complete-apps</span>
        </div>
        <div className={cx("complete-list")}>
          {PROJECTS.map((project, _index) => (
            <ProjectCard key={_index} project={project} />
          ))}
        </div>
      </div>
      <div className={cx("project-small")}>
        <div className={cx("small-title")}>
          <span className={cx("sign")}>#</span>
          <span className={cx("text")}>small-projects</span>
        </div>
        <div className={cx("small-list")}>
          {SMALL_PROJECTS.map((project, _index) => (
            <ProjectSmallCard project={project} key={_index} />
          ))}
        </div>
      </div>
    </div>
  );
}
