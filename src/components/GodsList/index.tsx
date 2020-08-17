import React from 'react';
import God from '../God';
import './GodsList.scss';
import { God as GodType } from '../../types';

//recieves the props from App.tsx
const GodsList = ({ selectedGod, godList, setSelectedGod }: any) => {
  return (
    <>
      <div className="godsList">
        <div className="sideBarHeading">
          <div className="sideBarTitles">
            <div className="savedGodsTitle">SAVED GODS</div>
            <div className="allGodsTitle">ALL GODS</div> 
          </div>
          <div className="sideBarHeadingLine"></div>
        </div>
        <div><input type="text" className="searchGod"  placeholder="Search God..." /></div>
        <div className="sideBarList">
          {godList.map((god: GodType) => (
            <div>
              {/* pass more props onto the God component */}
              <God
                id={god.id}
                name={god.name}
                thumbnail={god.thumbnail}
                isSelectedGod={selectedGod === god.id}
                setSelectedGod={setSelectedGod}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GodsList;
