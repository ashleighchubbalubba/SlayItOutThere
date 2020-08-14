import React from 'react';
import './God.scss';

type Props = {
  name: string;
  thumbnail: string;
};

const God = ({ name, thumbnail }: Props) => {
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
