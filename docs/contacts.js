import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import Link from "@docusaurus/Link";

const ContactList = [
  {
    ImgSrc: "https://github.com/chanandrew96",
    contactName: "GitHub"
  },
  {
    ImgSrc: "https://www.linkedin.com/in/andrewchan-961124",
    contactName: "LinkedIn"
  },
  {
    ImgSrc: "https://www.dotblogs.com.tw/ScatteredBlog",
    contactName: "DotBlog"
  }
];

function Contact({ ImgSrc, contactName }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Link to="/docs/about-me/aboutMe">
          <img className={styles.featureSvg} src={ImgSrc} alt={contactName} />
        </Link>
      </div>
      {/* <div className="text--center padding-horiz--md">
        <h3>{contactName}</h3>
        <p>{description}</p>
      </div> */}
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {ContactList.map((props, idx) => (
            <Contact key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
