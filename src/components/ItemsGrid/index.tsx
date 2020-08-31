import React from 'react';
import Item from '../Item';
import { Item as ItemType } from '../../types';
import { allGods, savedGods } from '../../constants/smiteData';
import './ItemsGrid.scss';

const ItemsGrid = ({ activeGod, isSavedGods, setIsDisplay }: any) => {
  let build,
    name,
    thumbnail = undefined;

  if (activeGod) {
    build = activeGod.build;
    name = activeGod.name;
    thumbnail = activeGod.thumbnail;
  } else {
    if (isSavedGods) {
      build = savedGods[0].build;
      name = savedGods[0].name;
      thumbnail = savedGods[0].thumbnail;
    } else {
      build = allGods[0].build;
      name = allGods[0].name;
      thumbnail = allGods[0].thumbnail;
    }
  }

  //Changes from display to build mode
  const handleIsDisplay = (bool: Boolean) => {
    setIsDisplay(bool);
  };

  return (
    <>
      <div className="itemsWrapper">
        <div className="buildHeading">
          <div className="buildGodProfile">
            <img src={thumbnail} alt="God Icon" className="buildGodIcon" />
            <div className="buildGodName">{name}</div>
          </div>
          <div className="buildLowerHeading">
            <input
              type="text"
              className="buildSearchBar"
              placeholder="Search Item..."
              // onChange={handleSearchItems}
              // value={searchTerm}
            />
            <button onClick={() => handleIsDisplay(false)} className="buildDisplayButton">
              BUILD
            </button>
          </div>
        </div>
        <div className="itemsGrid">
          {/* do it only if the selectedGod has a build */}
          {/* {build &&
            build.map((item: ItemType) => (
              <Item id={item.id} name={item.name} thumbnail={item.thumbnail} />
            ))} */}
            <div className="itemsGridLeft"></div>
              <div className="Starter">
                <div className="starterTitle">Starter</div>
                <div className="starterFlex"></div>
              </div>
              <div className="Core">
                <div className="coreTitle">Core</div>
                <div className="coreFlex"></div>
              </div>
              <div className="Situational">
                <div className="situationalTitle">Situational</div>
                <div className="situationalFlex"></div>
              </div>
            <div className="itemsGridRight"></div>
        </div>
      </div>
    </>
  );
};

export default ItemsGrid;
