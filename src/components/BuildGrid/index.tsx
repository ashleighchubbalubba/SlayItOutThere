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
            <img src={thumbnail} alt="" className="buildGodIcon" />
            <div className="buildGodName">{name}</div>
          </div>
          <div className="buildLowerHeading">
            <input type="text" className="buildSearchBar" placeholder="Search Item..." onChange={handleSearchItems} value={searchTerm}/>
            <button className="buildSaveButton">SAVE</button>
          </div>
        </div>
        <div className="buildGrid">
          {searchResults.map((item: ItemType) => (
            <Item name={item.name} thumbnail={item.thumbnail} />
          ))}
        </div>
        <div className="buildItems">
          {build &&
            build.map((item: ItemType) => <Item name={item.name} thumbnail={item.thumbnail} />)}
        </div>
      </div>
    </>
  );
};

export default BuildGrid;
