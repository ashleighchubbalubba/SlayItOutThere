import React from 'react';
type Props = {
  name: string;
};

const SavedGod = ({ name }: Props) => {
  return <div>Name: {name}</div>;
};

export default SavedGod;
