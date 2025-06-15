"use client";
import React, { useRef, useState } from "react";
import styles from "./styles.module.scss";
import { Tile } from "./tile";
import RowTileElement from "./components/RowTileElement";
import { EElementsShape } from "./models/element_shape";

const XPosFactor:number = 100 as const;

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
  const [XPos, setXPos] = useState<number>(0);
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
          previous
        </button>
        <button
          className={styles.nextButton}
          type="button"
          onClick={() => slideForwards(rowTileRef)}
        >
          next
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
