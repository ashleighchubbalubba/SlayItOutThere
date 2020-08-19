import React from 'react';
import God from '../God';
import './GodsList.scss';
import { God as GodType } from '../../types';

//recieves the props from App.tsx
const GodsList = ({ isSavedGods, setIsSavedGods, selectedGod, setSelectedGod, savedGodsList, allGodsList}: any) => {

  const handleSavedGods = () => {
    setIsSavedGods(true);
  };

  const handleAllGods = () => {
    setIsSavedGods(false);
  };


  return (
    <>
      <div className="godsList">
        <div className="sideBarHeading">
          <div className="sideBarTitles">
            <div className="savedGodsTitle" onClick={() => handleSavedGods()}>SAVED GODS</div>
            <div className="allGodsTitle" onClick={() => handleAllGods()}>ALL GODS</div> 
          </div>
          <div className="sideBarHeadingLine"></div>
        </div>
        {/* <div><input type="text" className="searchGod"  placeholder="Search God..." /></div> */}
        <div className="sideBarList">
          {isSavedGods &&
            savedGodsList.map((god: GodType) => (
              <div>
                <God
                  id={god.id}
                  name={god.name}
                  thumbnail={god.thumbnail}
                  isSelectedGod={selectedGod === god.id}
                  setSelectedGod={setSelectedGod}
                />
              </div>
            ))
          }
          {!isSavedGods &&
            allGodsList.map((god: GodType) => (
              <div>
                <God
                  id={god.id}
                  name={god.name}
                  thumbnail={god.thumbnail}
                  isSelectedGod={selectedGod === god.id}
                  setSelectedGod={setSelectedGod}
                />
              </div>
            ))
          }
          
        </div>
      </div>
    </>
  );
};

export default GodsList;
