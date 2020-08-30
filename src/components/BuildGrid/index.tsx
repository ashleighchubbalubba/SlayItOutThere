import React, { useState } from 'react';
import './BuildGrid.scss';
import { allItems, allGods } from '../../constants/smiteData';
import Item from '../Item';
import { Item as ItemType } from '../../types';
import { BuildState } from '../../types';

const BuildGrid = ({ activeGod }: any) => {
  let build, name, thumbnail;

  if (activeGod) {
    build = activeGod.build;
    name = activeGod.name;
    thumbnail = activeGod.thumbnail;
  } else {
    build = allGods[0].build;
    name = allGods[0].name;
    thumbnail = allGods[0].thumbnail;
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

  //State for sections of build
  const initialBuildState: BuildState = {
    buildSection: 0,
  };

  const [state, setState] = useState(initialBuildState);

  const setBuildState = (buildState: number) => {
    setState({
      buildSection: buildState,
    });
  };

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
            <button className="buildDisplayButton">DISPLAY</button>
          </div>
        </div>
        <div className="buildGrid">
          {searchResults.map((item: ItemType) => (
            <Item id={item.id} name={item.name} thumbnail={item.thumbnail} />
          ))}
        </div>
        <div className="buildItemsSection">
          <div className="sectionBuildTab">
            <button className="sectionBuildTabButton ">Starter</button>
            <button className="sectionBuildTabButton ">Core</button>
            <button className="sectionBuildTabButton ">Situational</button>
            <button className="sectionBuildTabButton ">Relics</button>
          </div>
          <div className="buildItems"></div>
          {/* {build &&
            build.map((item: ItemType) => <Item name={item.name} thumbnail={item.thumbnail} />)} */}
          {/* {sampleBuild.map((item: ItemType) => (
            <Item name={item.name} thumbnail={item.thumbnail} />
          ))} */}
        </div>
      </div>
    </>
  );
};

export default BuildGrid;
