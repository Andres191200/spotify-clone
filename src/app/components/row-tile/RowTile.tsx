"use client";
import React, { useRef } from "react";
import styles from "./styles.module.scss";
import { Tile } from "./tile";
import RowTileElement from "./components/RowTileElement";
import { EElementsShape } from "./models/element_shape";
import Image from "next/image";

const XPosFactor:number = 200 as const;

interface rowTileProps {
  title: string;
  elements: Tile[];
  elementsShape: EElementsShape;
}

function slideBackwards(rowTileRef:React.RefObject<HTMLDivElement | null>) {
  rowTileRef.current!.scrollLeft -= XPosFactor;
}

function slideForwards(rowTileRef:React.RefObject<HTMLDivElement | null>) {
  rowTileRef.current!.scrollLeft += XPosFactor;
}

export default function RowTile({
  title,
  elements,
  elementsShape,
}: rowTileProps) {
  const rowTileRef = useRef<HTMLDivElement | null>(null);
  
  return (
    <div className={styles.rowTileComponent}>
      <h2>{title}</h2>
      <div className={styles.rowTile} ref={rowTileRef}>
        <button
          className={styles.prevButton}
          type="button"
          onClick={() => slideBackwards(rowTileRef)}
        >
          <Image src={'/left-arrow.svg'} height={30} width={30} alt="arrow icon"/>
          
        </button>
        <button
          className={styles.nextButton}
          type="button"
          onClick={() => slideForwards(rowTileRef)}
        >
          <Image src={'/right-arrow.svg'} height={30} width={30} alt="arrow icon"/>
        </button>
        {elements.map((element, index) => (
          <RowTileElement
            element={element}
            key={index}
            elementsShape={elementsShape}
          />
        ))}
      </div>
    </div>
  );
}
