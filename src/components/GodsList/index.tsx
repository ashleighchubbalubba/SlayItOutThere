import React, { useState } from 'react';
import God from '../God';
import './GodsList.scss';
import { GodsListFields } from '../../types';

/*
const sampleGods = [
    {
      name: 'Bellona',
      thumbnail: '/icons/bellona.jpg',
    },
    {
      name: 'Jing Wei',
      thumbnail: '/icons/jingwei.jpg',
    },
    {
      name: 'Ao Kuang',
      thumbnail: '/icons/aokuang.jpg',
    },
    {
      name: 'Mulan',
      thumbnail: '/icons/mulan.jpeg',
    },
  ];
*/

const GodsList = ({ godsList }: GodsListFields) => {
  const [selectedGod, setSelectedGod] = useState(-1);

  const handleSetSelectedGod = (index: number) => {
    setSelectedGod(index);
  };

  return (
    <>
      <div className="godsList">
        <div className="godsListTitle">MY SAVED GODS</div>
        {godsList.map((god, index) => (
          <div onClick={() => handleSetSelectedGod(index)}>
            <God name={god.name} thumbnail={god.thumbnail} isSelectedGod={selectedGod === index}/>
          </div>
        ))}
      </div>
    </>
  );
};

export default GodsList;
