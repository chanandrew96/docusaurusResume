import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "Hello!",
    // https://unsplash.com/photos/WHUDOzd5IYU?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
    Svg: require("../../static/img/homepage-img/adam-solomon-WHUDOzd5IYU-unsplash.jpg")
      .default,
    description: (
      <>
        Welcome to my site! Wanna know more
        <Link
          // className="button button--secondary button--lg"
          to="/docs/about-me/aboutMe"
        >
          {" about me?"}
        </Link>
      </>
    )
  },
  {
    title: "What I do?",
    // https://unsplash.com/photos/OqtafYT5kTw?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
    Svg: require("../../static/img/homepage-img/ilya-pavlov-OqtafYT5kTw-unsplash.jpg")
      .default,
    description: (
      <>
        Let&apos;s check out what
        <code>
          <Link
            // className="button button--secondary button--lg"
            to="/docs/project-experience/projects"
          >
            {"projects"}
          </Link>
        </code>{" "}
        I&apos;ve done!
      </>
    )
  },
  {
    title: "Contact Me!",
    // https://unsplash.com/photos/5Ne6mMQtIdo?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
    Svg: require("../../static/img/homepage-img/melinda-gimpel-5Ne6mMQtIdo-unsplash.jpg")
      .default,
    description: (
      <>
        Wanna talk?
        <Link
          // className="button button--secondary button--lg"
          to="/docs/contacts"
        >
          {"Contact me!"}
        </Link>
      </>
    )
  }
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img className={styles.featureSvg} src={Svg} alt={title} />
        {/* <Svg className={styles.featureSvg} alt={title} /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
