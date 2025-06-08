import React from "react";
import styles from './styles.module.scss';
import Link from "next/link";

export default function LeftSectionFooter() {
  return (
    <div className={styles.sectionFooter}>
      <Link href={""}>Legal</Link>
      <Link href="">Safety & Privacy center</Link>
      <Link href="">Privacy policy</Link>
      <Link href="">Cookies</Link>
      <Link href="">About ads</Link>
      <Link href="">Accessibility</Link>
    </div>
  );
}
