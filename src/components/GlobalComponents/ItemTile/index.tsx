import React from 'react';
import './ItemTile.scss';
import { Item as ItemType } from '../../../types';

const ItemTile = ({ id, name, thumbnail, css, setSelectedItem }: any) => {

  const handleSelectedItem = (itemID: number) => {
    setSelectedItem(itemID);
  }

  return (
    <>
      <div className = "itemTileWrapper" onClick={() => handleSelectedItem(id)}>
        <div className="itemTileOverlay">
          <img src={thumbnail} alt="Item Thumbnail" className="itemTileThumbnail" />
        </div>
        <div className="itemTileName">{name}</div>
      </div>
    </>
  );
};

export default ItemTile;
