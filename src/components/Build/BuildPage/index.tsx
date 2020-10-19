import React, { useState } from 'react';
import Header from '../../GlobalComponents/Header';
import BuildGrid from '../BuildGrid';
import BuildSections from '../BuildSections';
import { Item as ItemType, BuildPageState } from '../../../types';
import { allGods, savedGods, allItems } from '../../../constants/smiteData';
import './BuildPage.scss';

const BuildPage = ({ activeGod, isSavedGods, isDisplay, setIsDisplay }: any) => {
  //Keep track on what items to display in grid
  const initialBuildState: BuildPageState = {
    buildGridItems: allItems as Array<ItemType>,
  };

  //Initialize and store default state
  const [state, setState] = useState(initialBuildState);

  //sets BuildGridItems state
  const setBuildGridItems = (newItemsList: Array<ItemType>) => {
    setState({
      buildGridItems: newItemsList,
    });
  };

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
  return (
    <div className="buildPageWrapper">
      <Header
        name={name}
        thumbnail={thumbnail}
        isDisplay={isDisplay}
        setIsDisplay={setIsDisplay}
        buildGridItems={state.buildGridItems}
        setBuildGridItems={setBuildGridItems}
      />
      <BuildGrid buildGridItems={state.buildGridItems} />
      <BuildSections build={build} />
    </div>
  );
};

export default BuildPage;
