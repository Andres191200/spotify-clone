import React from 'react'
import { Tile } from '../tile'
import styles from './styles.module.scss';
import { EElementsShape } from '../models/element_shape';
import Image from 'next/image';

interface RowTileElementProps{
  element: Tile,
  elementsShape: EElementsShape;
}

export default function RowTileElement({element, elementsShape} : RowTileElementProps) {
  return (
    <div className={styles.rowTileElementComponent}>
        <div className={`${styles.thumbnail} ${elementsShape === EElementsShape.circular ? styles.circular : styles.square}`}>
          <Image src={element.thumbnailPath} width={200} height={200} alt="thumbnail"/>
        </div>
        <h5 className={styles.title}>{element.title}</h5>
        <h5 className={styles.subtitle}>{element.subtitle}</h5>
    </div>
  )
}
