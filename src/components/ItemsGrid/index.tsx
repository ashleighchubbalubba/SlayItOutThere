import React from "react";
import Item from '../Item';
import './ItemsGrid.scss';
import { ItemsListFields } from '../../types';

const ItemsGrid = ({ itemsList }: ItemsListFields) => {
  return (
  <>
    <div className="itemsList">
        <div className="itemsListTitle" >NAME OF GOD</div>
        <div className="itemsGrid">
          {itemsList.map((item) => (
            <Item name={item.name} thumbnail={item.thumbnail}/>
          ))}
        </div>
    </div>
  </>
  );
  
};

export default ItemsGrid;