import React from 'react'
import styles from './styles.module.scss';
import { Tile } from './tile';
import RowTileElement from './RowTileElement';

interface rowTileProps{
    title: string;
    elements: Tile[];
}

export default function RowTile({title, elements}: rowTileProps) {
  return (
    <div className={styles.rowTileComponent}>
        {
            elements.map((element) => <RowTileElement {...element}/>)
        }
    </div>
  )
}
