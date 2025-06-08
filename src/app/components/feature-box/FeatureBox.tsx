"use client";
import React from 'react'
import styles from './styles.module.scss';
import Button from '../button/Button';
import { EButtonKind } from '../button/ButtonKind';

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
      <Button kind={EButtonKind.primaryButton} label={buttonLabel} onClick={() => {}} />
    </div>
  )
}
