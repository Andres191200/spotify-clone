import React from "react";
import styles from './styles.module.scss';

export default function LeftSectionFooter() {
  return (
    <div className={styles.sectionFooter}>
      <a href="">Legal</a>
      <a href="">Safety & Privacy center</a>
      <a href="">Privacy policy</a>
      <a href="">Cookies</a>
      <a href="">About ads</a>
      <a href="">Accessibility</a>
    </div>
  );
}
