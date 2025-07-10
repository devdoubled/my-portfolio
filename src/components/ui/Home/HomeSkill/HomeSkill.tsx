import classNames from "classnames/bind";
import styles from "./HomeSkill.module.scss";
import SkillCard from "../../SkillCard";
const cx = classNames.bind(styles);

export default function HomeSkill() {
  return (
    <div className={cx("home-skill")}>
      <div className={cx("home-skill-title")}>
        <span className={cx("sign")}>#</span>
        <span className={cx("text")}>skills</span>
        <div className={cx("line")}></div>
      </div>
      <div className={cx("home-skill-content")}>
        <div className={cx("skill-design")}></div>
        <div className={cx("skill-list")}>
          <div className={cx("skill-card")}>
            <SkillCard
              title="Languages"
              content="Typescript Javascript HTML/CSS"
            />
          </div>
          <div className={cx("skill-card")}>
            <SkillCard
              title="Databases"
              content="PostgreSQL MSQL MongoDB Redis"
            />
            <SkillCard
              title="Other"
              content="REST GraphQL BullMQ Kafka gRPC WebSockets TypeORM Moongoose JWT OAuth"
            />
          </div>
          <div className={cx("skill-card")}>
            <SkillCard
              title="Frameworkds"
              content="ReactJS NextJS NestJS React Native"
            />
            <SkillCard title="Devops/Cloud" content="Docker CI/CD Vercel VPS" />
            <SkillCard
              title="Tools"
              content="Github Redis Insight Postman Swagger"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
