import classNames from "classnames/bind";
import styles from "./About.module.scss";
import SkillCard from "@/components/ui/SkillCard";
import { FUN_FACTS } from "@/constants/fun_fact";
const cx = classNames.bind(styles);
export default function About() {
  return (
    <div className={cx("about-wrapper")}>
      <div className={cx("about-title")}>
        <div className={cx("main")}>
          <span className={cx("sign")}>/</span>
          <span className={cx("text")}>about-me</span>
        </div>
        <div className={cx("sub")}>Who am i?</div>
      </div>
      <div className={cx("about-content")}>
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
            Lately, I’ve been exploring how AI can make apps smarter and
            workflows smoother. I’m always up for learning new things,
            experimenting with new tech, and tackling projects that push me to
            grow.
          </p>
        </div>
      </div>
      <div className={cx("about-skill")}>
        <div className={cx("skill-title")}>
          <span className={cx("sign")}>#</span>
          <span className={cx("text")}>skills</span>
        </div>
        <div className={cx("skill-list")}>
          <SkillCard
            title="Languages"
            content="Typescript Javascript HTML/CSS"
          />
          <SkillCard
            title="Databases"
            content="PostgreSQL MSQL MongoDB Redis"
          />
          <SkillCard
            title="Frameworkds"
            content="ReactJS NextJS NestJS React Native"
          />
          <SkillCard title="Devops/Cloud" content="Docker CI/CD Vercel VPS" />
          <SkillCard
            title="Tools"
            content="Github Redis Insight Postman Swagger"
          />
          <SkillCard
            title="Other"
            content="REST GraphQL BullMQ Kafka gRPC WebSockets TypeORM Moongoose JWT OAuth"
          />
        </div>
      </div>
      <div className={cx("about-fun-fact")}>
        <div className={cx("fun-fact-title")}>
          <span className={cx("sign")}>#</span>
          <span className={cx("text")}>my-fun-facts</span>
        </div>
        <div className={cx("fun-fact-content")}>
          <div className={cx("fun-fact-list")}>
            {FUN_FACTS.map((fact) => (
              <div className={cx("fun-fact-item")} key={fact.id}>
                {fact.name}
              </div>
            ))}
          </div>
          <div className={cx("fun-fact-decor")}></div>
        </div>
      </div>
    </div>
  );
}
