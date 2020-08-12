import React from 'react';
import SavedGod from '../SavedGod';
import './SavedGodsList.scss';

type SavedGodProps = {
  name: string;
  thumbnail: string;
};

type Props = {
  savedGods: Array<SavedGodProps>;
};

const SavedGodsList = ({ savedGods }: Props) => {
  return (
    <div className="godList">
      {savedGods.map((god) => (
        <SavedGod name={god.name} thumbnail={god.thumbnail} />
      ))}
    </div>
  );
};

export default SavedGodsList;
