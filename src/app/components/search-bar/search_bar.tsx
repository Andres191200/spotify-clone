import React from 'react'
import styles from './styles.module.scss';

export default function SearchBar() {
  return (
    <div className={styles.searchBarComponent}>
        <input type="text" placeholder='What do you want to play?'/>
    </div>
  )
}
