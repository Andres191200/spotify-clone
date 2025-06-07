import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import FeatureBox from "../feature-box/FeatureBox";

export default function LeftSection() {
  return (
    <div className={styles.leftSectionComponent}>
      <div className={styles.sectionHeader}>
        <h4>Your library</h4>
        <Image src={"/add_icon.svg"} alt="add icon" height={20} width={20} />
      </div>
      <div className={styles.sectionBody}>
        <FeatureBox
          buttonLabel="Create playlist"
          subtitle="It is easy, we will help you"
          title="Create your first playlist"
        />
        <FeatureBox
          buttonLabel="Create playlist"
          subtitle="It is easy, we will help you"
          title="Create your first playlist"
        />
      </div>
    </div>
  );
}
