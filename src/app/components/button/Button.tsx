import React from "react";
import styles from "./styles.module.scss";
import { EButtonKind } from "./ButtonKind";

interface ButtonProps {
  label: string;
  onClick: () => void;
  kind: EButtonKind;
}

function getValueFromKey(kind: EButtonKind):string{
    const key = Object.keys(EButtonKind).find((k) => k === EButtonKind[kind as keyof typeof EButtonKind]);

    return key ?? 'Key not found';
}

function getClassName(kind:EButtonKind):string{
    return getValueFromKey(kind);
}

export default function Button({ label, onClick, kind }: ButtonProps) {
  return (
    <div className={`${styles.buttonComponent}`}>
      <button onClick={onClick} className={`${styles[getClassName(kind)]}`}>{label}</button>
    </div>
  );
}
