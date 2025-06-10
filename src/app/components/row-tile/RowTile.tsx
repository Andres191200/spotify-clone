import React from 'react'
import styles from './styles.module.scss';
import { Tile } from './tile';
import RowTileElement from './components/RowTileElement';
import { EElementsShape } from './models/element_shape';

interface rowTileProps{
    title: string;
    elements: Tile[];
    elementsShape: EElementsShape;
}

export default function RowTile({title, elements, elementsShape}: rowTileProps) {
  return (
    <div className={styles.rowTileComponent}>
        {
            elements.map((element) => <RowTileElement {...element}/>)
        }
    </div>
  )
}
