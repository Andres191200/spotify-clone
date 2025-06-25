import React from "react";
import styles from "./styles.module.scss";
import RowTile from "../row-tile/RowTile";
import { Tile } from "../row-tile/tile";
import { EElementsShape } from "../row-tile/models/element_shape";

export default function RightSection() {
  const trending: Tile[] = [
    { thumbnailPath: "/thriller_album.jpg", subtitle: "Michael Jackson", title: "Thriller" },
    { thumbnailPath: "/guns_roses.webp", subtitle: "Guns n roses", title: "Welcome to the jungle" },
    { thumbnailPath: "/sabrina_carpenter.webp", subtitle: "Sabrina Carpenter", title: "Manchild" },
    { thumbnailPath: "/tw_o_pts.webp", subtitle: "Twenty One Pilots", title: "The Contract" },
    { thumbnailPath: "/beach_boys.jpg", subtitle: "The Beach Boys", title: "God only knows" },
    { thumbnailPath: "/sabrina_carpenter.webp", subtitle: "Sabrina Carpenter", title: "Manchild" },
    { thumbnailPath: "/tw_o_pts.webp", subtitle: "Twenty One Pilots", title: "The Contract" },
    { thumbnailPath: "/beach_boys.jpg", subtitle: "The Beach Boys", title: "God only knows" },
  ];

  const artists: Tile[] = [
    { thumbnailPath: "/bad_bunny.jpeg", subtitle: "Artist", title: "Bad bunny" },
    { thumbnailPath: "/karol_g.jpg", subtitle: "Artist", title: "Karol G" },
    { thumbnailPath: "/rauw.jpeg", subtitle: "Artist", title: "Rauw Alejandro" },
    { thumbnailPath: "/harry.jpeg", subtitle: "Artist", title: "Zayn Malik" },
    { thumbnailPath: "/daddy.jpg", subtitle: "Artist", title: "Daddy Yankee" },
    { thumbnailPath: "/jennifer.jpeg", subtitle: "Artist", title: "Jennifer Lopez" },
    { thumbnailPath: "/george_michael.jpg", subtitle: "Artist", title: "George Michael" },
    { thumbnailPath: "/sam_smith.jpeg", subtitle: "Artist", title: "Sam Smith" },
    { thumbnailPath: "/charli_xcx.webp", subtitle: "Artist", title: "Charli xcx" },
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
                <RowTile
          title="Popular albums and singles"
          elements={artists}
          elementsShape={EElementsShape.square}
        />
                <RowTile
          title="Popular radio"
          elements={artists}
          elementsShape={EElementsShape.square}
        />
      </div>
    </div>
  );
}
