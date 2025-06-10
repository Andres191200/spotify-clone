import React from 'react';
import styles from './styles.module.scss';
import RowTile from '../row-tile/RowTile';
import { Tile } from '../row-tile/tile';

export default function RightSection() {
  const trending:Tile[] = [{thumbnailPath: '/', subtitle: 'artist subtitle', title: 'artist title'}]; 
  return (
    <div className={styles.rightSectionComponent}>
      <RowTile title='Trending' elements={trending}/>
    </div>
  )
}
