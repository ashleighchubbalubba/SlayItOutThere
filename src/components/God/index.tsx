import React from 'react';
import './God.scss';
import { GodFields } from '../../types';

const God = ({ name, thumbnail, isSelectedGod }: GodFields) => {
  return (
    <>
      <div className="godWrapper">
        <img
          src={thumbnail}
          alt="God Thumbnail"
          className={`${isSelectedGod && 'selectedGod'} godThumbnail`}
        />
        <div className="godName">{name}</div>
      </div>
    </>
  );
};

export default God;
