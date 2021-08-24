import {ITile} from "../types/tile";
import React from 'react';

interface IProps {
    tile: ITile,
}

const Tile: React.FC<IProps> = ({tile}) => {
    const typeDateSection = (
        <div>
            <p>{tile.type} {tile.date}</p>
        </div>
    )

    const authorTitleSection = (
        <div>
            <p className='author'>{tile.author}</p>
            <p className='title'>{tile.title}</p>
        </div>
    )

    return (
        <div className='tile'>
            <div className='tile-container'>
                <img src={tile.image} title={tile.title} alt={tile["image-alt"]}/>
                {typeDateSection}
            </div>
            {authorTitleSection}
        </div>
    )
}

export default Tile
