import React from 'react';
import Header from '../../GlobalComponents/Header';
import ItemsGrid from '../ItemsGrid';
import { allGods, savedGods } from '../../../constants/smiteData';
import './ItemsPage.scss';

const ItemsPage = ({ activeGod, isSavedGods, isDisplay, setIsDisplay }: any) => {
  let build,
    name,
    thumbnail = undefined;

  if (activeGod) {
    build = activeGod.build;
    name = activeGod.name;
    thumbnail = activeGod.thumbnail;
  } else {
    if (isSavedGods) {
      build = savedGods[0].build;
      name = savedGods[0].name;
      thumbnail = savedGods[0].thumbnail;
    } else {
      build = allGods[0].build;
      name = allGods[0].name;
      thumbnail = allGods[0].thumbnail;
    }
  }

  return (
    <div className="itemsPageWrapper">
      <Header name={name} thumbnail={thumbnail} isDisplay={isDisplay} setIsDisplay={setIsDisplay} setBuildGridItems={null}/>
      <ItemsGrid build={build} />
    </div>
  );
};

export default ItemsPage;
