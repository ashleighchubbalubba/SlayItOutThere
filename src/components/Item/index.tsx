import React from 'react';
import './Item.scss';
import { Item as ItemType } from '../../types';

const Item = ({ name, thumbnail }: ItemType) => {
  return (
    <>
      <div className="itemWrapper">
        <div className="thumbnailOverlay">
          <img src={thumbnail} alt="Item Thumbnail" className="itemThumbnail" />
        </div>
        <div className="itemName">{name}</div>
      </div>
    </>
  );
};

export default Item;
