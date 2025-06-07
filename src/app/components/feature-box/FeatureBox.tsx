import React from 'react'
import styles from './styles.module.scss';

interface featureBoxProps{
  title: string,
  subtitle: string,
  buttonLabel: string,
}

export default function FeatureBox({ title, subtitle, buttonLabel}: featureBoxProps) {
  return (
    <div className={styles.featureBoxComponent}>
      <h4>{title}</h4>
      <p className='subtitle'>{subtitle}</p>
      <button>{buttonLabel}</button>
    </div>
  )
}
