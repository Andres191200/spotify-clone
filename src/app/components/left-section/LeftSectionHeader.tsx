import Image from "next/image";
import React from "react";
import styles from './styles.module.scss';

export default function LeftSectionHeader() {
  return (
    <div className={styles.sectionHeader}>
      <h4>Your library</h4>
      <Image src={"/add_icon.svg"} alt="add icon" height={20} width={20} />
    </div>
  );
}
