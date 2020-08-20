import React from 'react';
import './BuildGrid.scss';

const BuildGrid = ({ activeGod }: any) => {
  let build,
    name, thumbnail = undefined;

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
            <img
              src={thumbnail}
              alt=""
              className="buildGodIcon"
            />
            <div className="buildGodName">{name}</div>
          </div>
          <div className="buildLowerHeading">
            <div className="buildSearchBar"></div>
            <div className="buildSaveButton"></div>
          </div>
        </div>

        <div className="buildGrid"></div>
        <div className="buildItems"></div>
      </div>
    </>
  );
};

export default BuildGrid;
