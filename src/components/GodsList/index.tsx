import React from 'react';
import God from '../God';
import './GodsList.scss';
import { GodsListFields } from '../../types';

const GodsList = ({ godsList }: GodsListFields) => {
  return (
    <>
      <div className="godsList">
        <div className="godsListTitle">MY SAVED GODS</div>
        {godsList.map((god) => (
          <God name={god.name} thumbnail={god.thumbnail} />
        ))}
      </div>
    </>
  );
};

export default GodsList;
