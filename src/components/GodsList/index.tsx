import React from 'react';
import God from '../God';
import './GodsList.scss';
import { God as GodType } from '../../types';

//recieves the props from App.tsx
const GodsList = ({ selectedGod, godList, setSelectedGod }: any) => {
  return (
    <>
      <div className="godsList">
        <div className="godsListTitle">MY SAVED GODS</div>
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
    </>
  );
};

export default GodsList;
