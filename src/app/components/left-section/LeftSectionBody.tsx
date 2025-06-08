import React from "react";
import FeatureBox from "../feature-box/FeatureBox";
import styles from "./styles.module.scss";

export default function LeftSectionBody() {
  return (
    <div className={styles.sectionBody}>
      <FeatureBox
        buttonLabel="Create playlist"
        subtitle="It's easy, we'll help you"
        title="Create your first playlist"
      />
      <FeatureBox
        buttonLabel="Browse podcasts"
        subtitle="we'll keep you updated on new episodes"
        title="Let's find some podcast to follow"
      />
    </div>
  );
}
