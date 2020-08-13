import React from 'react';
import './SavedGod.scss';

type Props = {
  name: string;
  thumbnail: string;
};

const SavedGod = ({ name, thumbnail }: Props) => {
  return (
    <>
      <div className="godImgAndName">
        <img src={thumbnail} alt="God Thumbnail" className = "godThumbnail"/>
        <div className="godName">{name}</div>
      </div>
    </>
  );
};

export default SavedGod;
