import React, { useState, useContext } from 'react';
import God from '../God';
import './GodsList.scss';
import { GodsListFields } from '../../types';
//imports the Context to this file
import { SelectedGodContext } from '../../App';

const GodsList = ({ godsList }: GodsListFields) => {

  //fetched the specific state from Context
  const { selectedGodState } = useContext(SelectedGodContext);
  //fetches the properties from that specific state
  const { selectedGod,  setSelectedGod } = selectedGodState;

  //does the changing of the state
  const handleSetSelectedGod = (index: number) => {
    setSelectedGod(index);
  };

  return (
    <>
      <div className="godsList">
        <div className="godsListTitle">MY SAVED GODS</div>
        {godsList.map((god, index) => (
          // triggers the changing of the state if user clicks on this tag
          <div onClick={() => handleSetSelectedGod(index)}>
            {/* allows for dynamic css changes depending if isSelectedGod is true */}
            <God name={god.name} thumbnail={god.thumbnail} isSelectedGod={selectedGod === index}/>
          </div>
        ))}
      </div>
    </>
  );
};

export default GodsList;
