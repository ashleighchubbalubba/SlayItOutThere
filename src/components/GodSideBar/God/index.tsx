import React from 'react';
import './God.scss';

const God = ({ id, name, thumbnail, isSelectedGod, setSelectedGod }: any) => {

  //on an event change, it calls the method that changes the selected god
  const handleSetSelectedGod = () => {
    setSelectedGod(id);
  };

  return (
    <>
      {/* when this tag is clicked on, it triggers handleSetSelectedGod */}
      <div className="godWrapper" onClick={() => handleSetSelectedGod()}>
        <img
          src={thumbnail}
          alt="God Thumbnail"
          // if isSelectedGod == true, then 'selectedGod' is an additional className for this god
          className={`${isSelectedGod && 'selectedGod'} godThumbnail`}
        />
        <div className="godName">{name}</div>
      </div>
    </>
  );
};

export default God;
