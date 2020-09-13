import React, { useState } from 'react';
import { BuildState } from '../../../types';
import './BuildSections.scss';

const BuildSections = ({ build }: any) => {

  const initialBuildState: BuildState = {
    buildSection: 0,
  };

  const [state, setState] = useState(initialBuildState);

  const setBuildSectionState = (buildState: number) => {
    setState({
      buildSection: buildState,
    });
  };

  return (
    <>
      <div className="buildSectionsWrapper">
        <div className="buildSectionsTabs">
          <button
            onClick={() => setBuildSectionState(0)}
            className={`${state.buildSection === 0 && 'selectedBuildSection'} buildSectionsButton`}
          >
            Starter
          </button>
          <button
            onClick={() => setBuildSectionState(1)}
            className={`${state.buildSection === 1 && 'selectedBuildSection'} buildSectionsButton`}
          >
            Core
          </button>
          <button
            onClick={() => setBuildSectionState(2)}
            className={`${state.buildSection === 2 && 'selectedBuildSection'} buildSectionsButton`}
          >
            Situational
          </button>
          <button
            onClick={() => setBuildSectionState(3)}
            className={`${state.buildSection === 3 && 'selectedBuildSection'} buildSectionsButton`}
          >
            Relics
          </button>
        </div>
        <div className="buildSectionsItemsWrapper">
            {/* {build &&build.map((item: ItemType) => <Item id={item.id} name={item.name} thumbnail={item.thumbnail} />)} */}
            {/* {sampleBuild && sampleBuild.map((item: ItemType) => <Item id={item.id} name={item.name} thumbnail={item.thumbnail} />)} */}
            {/* <div className="buildSingleItem"></div>
            <div className="buildSingleItem"></div>
            <div className={`${state.buildSection === 3 && 'buildRelicItem'} buildSingleItem`}></div>
            <div className={`${state.buildSection === 3 && 'buildRelicItem'} buildSingleItem`}></div>
            <div className={`${state.buildSection === 3 && 'buildRelicItem'} buildSingleItem`}></div>
            <div className={`${state.buildSection === 3 && 'buildRelicItem'} buildSingleItem`}></div> */}
        </div>
      </div>
    </>
  );
};

export default BuildSections;
