import React from 'react';
import Item from '../Item';
import { Item as ItemType } from '../../types';
import './ItemsGrid.scss';

const ItemsGrid = ({ activeGod }: any) => {
  let build, name = undefined;
  
  if (activeGod) {
    build = activeGod.build;
    name = activeGod.name;
  }

  return (
    <>
      <div className="itemsList">
        <div className="itemsListTitle">{name}</div>
        <div className="itemsGrid">
          {/* do it only if the selectedGod has a build */}
          {build && build.map((item: ItemType) => <Item id={item.id} name={item.name} thumbnail={item.thumbnail} />)}
        </div>
      </div>
    </>
  );
};

export default ItemsGrid;
