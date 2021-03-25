import { Component } from 'react';
import { allGods, allItems } from './constants/smiteData';
import { Item as ItemType, God as GodType } from './types';

class ItemService {
  // getGod(id: number): GodType {
  //   var returnedGod = allGods[0];
  //   allGods.forEach((god: GodType) => {
  //     if (god.id === id) {
  //       returnedGod = god;
  //     }
  //   });
  //   return returnedGod;
  // }

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
