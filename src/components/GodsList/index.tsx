import React from 'react';
import God from '../God';
import './GodsList.scss';
import { God as GodType } from '../../types';
import { allGods } from '../../constants/smiteData';

const GodsList = ({
  isSavedGods,
  setIsSavedGods,
  selectedGod,
  setSelectedGod,
  savedGodsList,
}: any) => {
  //Changing between tabs
  const handleSavedGods = (bool: Boolean) => {
    setIsSavedGods(bool);
  };

  //Search Bar
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([isSavedGods ? savedGodsList : allGods]);

  const handleSearchGods = (event: React.FormEvent<HTMLInputElement>): void => {
    setSearchTerm(event.currentTarget.value);
  };

  React.useEffect(() => {
    var results: GodType[] = [];
    if (isSavedGods) {
      results = savedGodsList.filter((god: any) =>
        god.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      results = allGods.filter((god: any) =>
        god.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setSearchResults(results);
  }, [isSavedGods, savedGodsList, searchTerm]);

  return (
    <>
      <div className="godsList">
        <div className="sideBarHeading">
          <div className="sideBarTitles">
            <div
              className={`${isSavedGods && 'brightenTitle'} savedGodsTitle`}
              onClick={() => handleSavedGods(true)}
            >
              SAVED GODS
            </div>
            <div
              className={`${!isSavedGods && 'brightenTitle'} allGodsTitle`}
              onClick={() => handleSavedGods(false)}
            >
              ALL GODS
            </div>
          </div>
          <div className="sideBarHeadingLine"></div>
        </div>
        <div>
          <input
            type="text"
            className="searchGod"
            onChange={handleSearchGods}
            value={searchTerm}
            placeholder="Search God..."
          />
        </div>
        <div className="sideBarList">
          {searchResults.map((god: GodType) => (
            <div>
              <God
                id={god.id}
                name={god.name}
                thumbnail={god.thumbnail}
                isSelectedGod={selectedGod === god.id}
                setSelectedGod={setSelectedGod}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GodsList;
