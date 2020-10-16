import React from 'react';
import './ItemTile.scss';
import { Item as ItemType } from '../../../types';

const ItemTile = ({ name, thumbnail, css }: any) => {
  return (
    <>
      <div className = "itemTileWrapper">
        <div className="itemTileOverlay">
          <img src={thumbnail} alt="Item Thumbnail" className="itemTileThumbnail" />
        </div>
        <div className="itemTileName">{name}</div>
      </div>
    </>
  );
};

export default ItemTile;
