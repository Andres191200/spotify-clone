import React from "react";
import styles from "./styles.module.scss";
import RowTile from "../row-tile/RowTile";
import { Tile } from "../row-tile/tile";
import { EElementsShape } from "../row-tile/models/element_shape";

export default function RightSection() {
  const trending: Tile[] = [
    { thumbnailPath: "/", subtitle: "artist subtitle", title: "artist title" },
    { thumbnailPath: "/", subtitle: "artist subtitle", title: "artist title" },
    { thumbnailPath: "/", subtitle: "artist subtitle", title: "artist title" },
  ];
  return (
    <div className={styles.rightSectionComponent}>
      <RowTile
        title="Trending songs"
        elements={trending}
        elementsShape={EElementsShape.square}
      />
    </div>
  );
}
