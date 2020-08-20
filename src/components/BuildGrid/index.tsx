import React from 'react';
import './BuildGrid.scss';
import { allItems } from '../../constants/smiteData';
import Item from '../Item';
import { Item as ItemType } from '../../types';

const BuildGrid = ({ activeGod }: any) => {
  let build,
    name,
    thumbnail = undefined;

  if (activeGod) {
    build = activeGod.build;
    name = activeGod.name;
    thumbnail = activeGod.thumbnail;
  }

  return (
    <>
      <div className="buildWrapper">
        <div className="buildHeading">
          <div className="buildGodProfile">
            <img src={thumbnail} alt="" className="buildGodIcon" />
            <div className="buildGodName">{name}</div>
          </div>
          <div className="buildLowerHeading">
            <input type="text" className="buildSearchBar" placeholder="Search Item..." />
            <button className="buildSaveButton">SAVE</button>
          </div>
        </div>
        <div className="buildGrid">
          {allItems.map((item: ItemType) => (
            <Item name={item.name} thumbnail={item.thumbnail} />
          ))}
        </div>
        <div className="buildItems">
          {(build) && build.map((item: ItemType) => (
            <Item name={item.name} thumbnail={item.thumbnail} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BuildGrid;
