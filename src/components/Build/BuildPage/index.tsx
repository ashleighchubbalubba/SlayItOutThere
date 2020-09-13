import React from 'react';
import Header from '../../GlobalComponents/Header';
import BuildGrid from '../BuildGrid';
import BuildSections from '../BuildSections';
import { allGods, savedGods } from '../../../constants/smiteData';
import './BuildPage.scss';

const BuildPage = ({ activeGod, isSavedGods, isDisplay, setIsDisplay }: any) => {
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
    <div className="buildPageWrapper">
        <Header
          name={name} thumbnail={thumbnail} isDisplay={isDisplay} setIsDisplay={setIsDisplay}
        />
        <BuildGrid/>
        <BuildSections build={build}/>
    </div>
  );
};

export default BuildPage;
