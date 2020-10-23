import React from 'react';
import ItemTile from '../../GlobalComponents/ItemTile';
import { Item as ItemType } from '../../../types';
import './BuildGrid.scss';

const BuildGrid = ({buildGridItems, setSelectedItem}: any) => {
  return (
    <div className="buildGridWrapper">
      {buildGridItems.map((item: ItemType) => (
        <ItemTile id={item.id} name={item.name} thumbnail={item.thumbnail} setSelectedItem={setSelectedItem}/>
      ))}
    </div>
  );
};

export default BuildGrid;
