import React, { useState } from 'react';
import { BuildState } from '../../types';
import { allGods } from '../../constants/smiteData';
import './BuildSections.scss';

const BuildSections = ({ activeGod }: any) => {
  let build;

  if (activeGod) build = activeGod.build;
  else build = allGods[0].build;

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
      <div className="buildItemsSection">
        <div className="sectionBuildTab">
          <button
            onClick={() => setBuildState(0)}
            className={`${state.buildSection === 0 && 'selectedSection'} sectionBuildButton`}
          >
            Starter
          </button>
          <button
            onClick={() => setBuildState(1)}
            className={`${state.buildSection === 1 && 'selectedSection'} sectionBuildButton`}
          >
            Core
          </button>
          <button
            onClick={() => setBuildState(2)}
            className={`${state.buildSection === 2 && 'selectedSection'} sectionBuildButton`}
          >
            Situational
          </button>
          <button
            onClick={() => setBuildState(3)}
            className={`${state.buildSection === 3 && 'selectedSection'} sectionBuildButton`}
          >
            Relics
          </button>
        </div>
        <div className="buildItems">
            <div className="buildSingleItem"></div>
            <div className="buildSingleItem"></div>
            <div className={`${state.buildSection === 3 && 'buildRelicItem'} buildSingleItem`}></div>
            <div className={`${state.buildSection === 3 && 'buildRelicItem'} buildSingleItem`}></div>
            <div className={`${state.buildSection === 3 && 'buildRelicItem'} buildSingleItem`}></div>
            <div className={`${state.buildSection === 3 && 'buildRelicItem'} buildSingleItem`}></div>
        </div>
        {/* {build &&
            build.map((item: ItemType) => <Item name={item.name} thumbnail={item.thumbnail} />)} */}
        {/* {sampleBuild.map((item: ItemType) => (
            <Item name={item.name} thumbnail={item.thumbnail} />
          ))} */}
      </div>
    </>
  );
};

export default BuildSections;
