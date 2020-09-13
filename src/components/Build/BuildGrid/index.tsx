import React from 'react';
import ItemTile from '../../GlobalComponents/ItemTile';
import { Item as ItemType } from '../../../types';
import './BuildGrid.scss';

const BuildGrid = () => {
  return (
    <div className="buildGridWrapper">
      {/* {searchResults.map((item: ItemType) => (
        <ItemTile id={item.id} name={item.name} thumbnail={item.thumbnail} />
      ))} */}
    </div>
  );
};

export default BuildGrid;
