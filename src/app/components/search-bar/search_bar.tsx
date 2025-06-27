import React from 'react'
import styles from './styles.module.scss';
import Image from 'next/image';

export default function SearchBar() {
  return (
    <div className={styles.searchBarComponent}>
        <input type="text" placeholder='What do you want to play?'/>
        <div className={styles.iconContainer}>
          <Image src={'/zoom_icon.svg'} height={30} width={30} alt="search icon"/>
        </div>
    </div>
  )
}
