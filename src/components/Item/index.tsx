import React from 'react';
import './Item.scss';
import { ItemFields } from '../../types';

const Item = ({ name, thumbnail }: ItemFields) => {
    return (
        <>
            <div className="itemWrapper">
                <img
                    src={thumbnail}
                    alt="Item Thumbnail"
                    className="itemThumbnail"
                />
                <div className="itemName">{name}</div>
            </div>
        </>
    );
};

export default Item;