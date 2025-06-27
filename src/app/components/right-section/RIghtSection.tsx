import React from "react";
import styles from "./styles.module.scss";
import RowTile from "../row-tile/RowTile";
import { Tile } from "../row-tile/tile";
import { EElementsShape } from "../row-tile/models/element_shape";

export default function RightSection() {
  const trending: Tile[] = [
    { thumbnailPath: "/albums/thriller_album.jpg", subtitle: "Michael Jackson", title: "Thriller" },
    { thumbnailPath: "/albums/guns_roses.webp", subtitle: "Guns n roses", title: "Welcome to the jungle" },
    { thumbnailPath: "/albums/sabrina_carpenter.webp", subtitle: "Sabrina Carpenter", title: "Manchild" },
    { thumbnailPath: "/albums/tw_o_pts.webp", subtitle: "Twenty One Pilots", title: "The Contract" },
    { thumbnailPath: "/albums/beach_boys.jpg", subtitle: "The Beach Boys", title: "God only knows" },
    { thumbnailPath: "/albums/sabrina_carpenter.webp", subtitle: "Sabrina Carpenter", title: "Manchild" },
    { thumbnailPath: "/albums/tw_o_pts.webp", subtitle: "Twenty One Pilots", title: "The Contract" },
    { thumbnailPath: "/albums/beach_boys.jpg", subtitle: "The Beach Boys", title: "God only knows" },
  ];

  const artists: Tile[] = [
    { thumbnailPath: "/artists/bad_bunny.jpeg", subtitle: "Artist", title: "Bad bunny" },
    { thumbnailPath: "/artists/karol_g.jpg", subtitle: "Artist", title: "Karol G" },
    { thumbnailPath: "/artists/rauw.jpeg", subtitle: "Artist", title: "Rauw Alejandro" },
    { thumbnailPath: "/artists/harry.jpeg", subtitle: "Artist", title: "Zayn Malik" },
    { thumbnailPath: "/artists/daddy.jpg", subtitle: "Artist", title: "Daddy Yankee" },
    { thumbnailPath: "/artists/jennifer.jpeg", subtitle: "Artist", title: "Jennifer Lopez" },
    { thumbnailPath: "/artists/george_michael.jpg", subtitle: "Artist", title: "George Michael" },
    { thumbnailPath: "/artists/sam_smith.jpeg", subtitle: "Artist", title: "Sam Smith" },
    { thumbnailPath: "/artists/charli_xcx.webp", subtitle: "Artist", title: "Charli xcx" },
    { thumbnailPath: "/artists/zayn.jpeg", subtitle: "Artist", title: "Zayn" },

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
