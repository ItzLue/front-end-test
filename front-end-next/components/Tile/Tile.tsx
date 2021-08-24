import {ITile} from "../../types/tile";
import React from 'react';
import styles from 'style.css'

interface IProps {
    tile: ITile,
    classname?: string
}

const Tile: React.FC<IProps> = ({tile, classname = ''}) => {


    const typeDateSection = (
        <div>
            <p>{tile.type} {tile.date}</p>
        </div>
    )

    const authorTitleSection = (
        <div>
            <p>{tile.author}</p>
            <p>{tile.title}</p>
        </div>
    )

    return (
        <div className={styles.tile}>
            <img src={tile.image} title={tile.title} alt={tile["image-alt"]}>
                {typeDateSection}
            </img>
            {authorTitleSection}
        </div>
    )
}

export default Tile
