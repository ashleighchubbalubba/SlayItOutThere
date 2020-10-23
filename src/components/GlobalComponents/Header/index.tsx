import React from 'react';
import { allItems } from '../../../constants/smiteData';
import './Header.scss';

const Header = ({
  name,
  thumbnail,
  isDisplay,
  setIsDisplay,
  setBuildGridItems,
}: any) => {
  const handleIsDisplay = (bool: any) => {
    setIsDisplay(bool);
  };

  //Search Bar
  const [searchTerm, setSearchTerm] = React.useState('');
  // const [searchResults, setSearchResults] = React.useState(allItems);

  const handleSearchItems = (event: React.FormEvent<HTMLInputElement>): void => {
    setSearchTerm(event.currentTarget.value);
  };

  React.useEffect(() => {
    const results = allItems.filter((item: any) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if(setBuildGridItems !== null)
      setBuildGridItems(results);
  }, [searchTerm]);

  let button;

  if (isDisplay) {
    button = (
      <button onClick={() => handleIsDisplay(false)} className="headingDisplayButton">
        BUILD
      </button>
    );
  } else {
    button = (
      <button onClick={() => handleIsDisplay(true)} className="headingDisplayButton">
        DISPLAY
      </button>
    );
  }

  return (
    <>
      <div className="headingWrapper">
        <div className="headingGodProfile">
          <img src={thumbnail} alt="God Icon" className="headingGodIcon" />
          <div className="headingGodName">{name}</div>
        </div>
        <div className="headingLowerHeading">
          <input
            type="text"
            className="headingSearchBar"
            placeholder= {(!isDisplay && "Search Item...") || (isDisplay && "Search Build...")}
            onChange={handleSearchItems}
            value={searchTerm}
          />
          {button}
        </div>
      </div>
    </>
  );
};

export default Header;
