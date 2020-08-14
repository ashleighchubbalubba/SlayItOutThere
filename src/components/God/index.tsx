import React from 'react';
import './God.scss';
import { GodFields } from '../../types';

const God = ({ name, thumbnail }: GodFields) => {
  return (
    <>
      <div className="godImgAndName">
        <img src={thumbnail} alt="God Thumbnail" className = "godThumbnail"/>
        <div className="godName">{name}</div>
      </div>
    </>
  );
};

export default God;
