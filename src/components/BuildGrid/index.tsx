import React from 'react';
import './BuildGrid.scss';
import { allItems, allGods, savedGods } from '../../constants/smiteData';
import Item from '../Item';
import { Item as ItemType } from '../../types';
import BuildSections from '../BuildSections';

const BuildGrid = ({ activeGod, isSavedGods, setIsDisplay }: any) => {
  let build, name, thumbnail;

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

  //Search Bar
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState(allItems);

  const handleSearchItems = (event: React.FormEvent<HTMLInputElement>): void => {
    setSearchTerm(event.currentTarget.value);
  };

  React.useEffect(() => {
    const results = allItems.filter((item: any) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <>
      <div className="buildWrapper">
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
              onChange={handleSearchItems}
              value={searchTerm}
            />
            <button onClick={() => handleIsDisplay(true)} className="buildDisplayButton">
              DISPLAY
            </button>
          </div>
        </div>
        <div className="buildGrid">
          {searchResults.map((item: ItemType) => (
            <Item id={item.id} name={item.name} thumbnail={item.thumbnail} />
          ))}
        </div>
        <BuildSections activeGod={activeGod} />
      </div>
    </>
  );
};

export default BuildGrid;
