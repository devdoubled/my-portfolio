/* eslint-disable @next/next/no-img-element */
import classNames from "classnames/bind";
import { notFound } from "next/navigation";
import styles from "./ProjectDetail.module.scss";
import { DETAIL_PROJECTS } from "@/constants/projects";
const cx = classNames.bind(styles);

export default async function ProjectDetail(context: {
  params: Promise<{ id?: string }>;
}) {
  const { id } = await context.params;

  if (!id) {
    notFound();
  }

  const project = DETAIL_PROJECTS.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className={cx("project-detail-wrapper")}>
      <div className={cx("project-detail-title")}>
        <span className={cx("sign")}>/</span>
        <span className={cx("text")}>{project.title}</span>
      </div>
      <div className={cx("project-detail-desc")}>{project.desc}</div>
      <div className={cx("project-detail-stack")}>
        <span className={cx("sign")}>#</span>
        <span className={cx("text")}>tech-stack</span>
      </div>
      <div className={cx("stack-detail")}>{project.stack}</div>
      <div className={cx("project-detail-archive")}>
        <span className={cx("sign")}>#</span>
        <span className={cx("text")}>what-i-did</span>
      </div>
      <ul className={cx("archive-list")}>
        {project.archive.map((archive, _index) => (
          <li className={cx("archive-item")} key={_index}>
            {archive}
          </li>
        ))}
      </ul>
      <div className={cx("project-detail-image")}>
        <span className={cx("sign")}>#</span>
        <span className={cx("text")}>demo</span>
      </div>
      <div className={cx("image-list")}>
        {project.title.toLowerCase().includes("healthfeast") &&
        project.video &&
        project.video.length > 0
          ? project.video.map((url, _index) => (
              <iframe
                key={_index}
                src={url}
                className={cx("video-item")}
                title={`project video ${_index}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ))
          : project.image.map((img, _index) => (
              <img
                src={img}
                key={_index}
                alt={`demo image ${_index}`}
                className={cx("image-item")}
              />
            ))}
      </div>
    </div>
  );
}
