import React from 'react'
import { Tile } from '../tile'
import styles from '../styles.module.scss';

export default function RowTileElement(element: Tile) {
  return (
    <div className={styles.rowTileElementComponent}>
        <div className={styles.thumbnail}></div>
        <h5>{element.title}</h5>
        <h5>{element.subtitle}</h5>
    </div>
  )
}
