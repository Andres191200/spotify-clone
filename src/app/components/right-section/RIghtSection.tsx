import React from "react";
import styles from "./styles.module.scss";
import RowTile from "../row-tile/RowTile";
import { Tile } from "../row-tile/tile";
import { EElementsShape } from "../row-tile/models/element_shape";

export default function RightSection() {
  const trending: Tile[] = [
    { thumbnailPath: "/", subtitle: "Michael Jackson", title: "Thriller" },
    { thumbnailPath: "/", subtitle: "Guns n roses", title: "Welcome to the jungle" },
    { thumbnailPath: "/", subtitle: "Sabrina Carpenter", title: "Manchild" },
    { thumbnailPath: "/", subtitle: "Twenty One Pilots", title: "The Contract" },
    { thumbnailPath: "/", subtitle: "The Beach Boys", title: "God only knows" },
    { thumbnailPath: "/", subtitle: "Sabrina Carpenter", title: "Manchild" },
    { thumbnailPath: "/", subtitle: "Twenty One Pilots", title: "The Contract" },
    { thumbnailPath: "/", subtitle: "The Beach Boys", title: "God only knows" },
  ];

  const artists: Tile[] = [
    { thumbnailPath: "/", subtitle: "Artist", title: "Bad bunny" },
    { thumbnailPath: "/", subtitle: "Artist", title: "Karol G" },
    { thumbnailPath: "/", subtitle: "Artist", title: "Rauw Alejandro" },
  ];
  return (
    <div className={styles.rightSectionComponent}>
      <div className={styles.rightSectionContentRows}>
        <RowTile
          title="Trending songs"
          elements={trending}
          elementsShape={EElementsShape.square}
        />
        <RowTile
          title="Popular artists"
          elements={artists}
          elementsShape={EElementsShape.circular}
        />
      </div>
    </div>
  );
}
