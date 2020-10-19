import { Component } from 'react';
import { allItems } from './constants/smiteData';
import { Item as ItemType } from './types';

class ItemService {
  getItem(id: number): ItemType {
    var returnedItem = allItems[0];
    allItems.forEach((item: ItemType) => {
      if (item.id === id) {
        returnedItem = item;
      }
    });
    return returnedItem;
  }
}

export default ItemService;
