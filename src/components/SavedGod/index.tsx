import React from 'react';
import './SavedGod.scss';

type Props = {
  name: string;
  thumbnail: string;
};

const SavedGod = ({ name, thumbnail }: Props) => {
  console.log(thumbnail);
  return (
    <>
      <img src={thumbnail} alt="God Thumbnail" className = "godThumbnail"/>
      <div className="godName">{name}</div>
    </>
  );
};

export default SavedGod;
