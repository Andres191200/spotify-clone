import React from 'react'
import styles from './styles.module.scss';
import { Tile } from './tile';

interface rowTileProps{
    title: string;
    elements: Tile[];
}

export default function RowTile({title}: rowTileProps) {
  return (
    <div className={styles.rowTileComponent}>
        <h2>{title}</h2>
    </div>
  )
}
