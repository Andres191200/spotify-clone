import React from "react";
import styles from "./styles.module.scss";
import LeftSectionHeader from "./LeftSectionHeader";
import LeftSectionBody from "./LeftSectionBody";
import LeftSectionFooter from "./LeftSectionFooter";

export default function LeftSection() {
  return (
    <div className={styles.leftSectionComponent}>
      <LeftSectionHeader />
      <LeftSectionBody />
      <LeftSectionFooter />
    </div>
  );
}
