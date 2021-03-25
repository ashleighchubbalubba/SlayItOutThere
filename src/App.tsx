import React, { useState } from 'react';
import GodsList from './components/GodSideBar/GodsList';
import ItemsPage from './components/Items/ItemsPage';
import BuildPage from './components/Build/BuildPage';
import { savedGods, allGods } from './constants/smiteData';
import { God as GodType, GlobalState } from './types/';
import { GridRow, GridCol } from './components/GlobalComponents/Grid';
import ItemService from './itemService';
import './App.css';

const App = () => {
  const itemService = new ItemService();

  //defines initial values of the states
  const initialState: GlobalState = {
    isSavedGods: true,
    selectedGod: 0,
    isDisplay: false,
  };

  //what stores and intializes the default state
  const [state, setState] = useState(initialState);

  //sets Saved God State
  const setIsSavedGod = (isSavedGods: Boolean) => {
    setState({
      isSavedGods: isSavedGods,
      selectedGod: state.selectedGod,
      isDisplay: state.isDisplay,
    });
  };

  //sets Selected God State
  const setSelectedGod = (id: number) => {
    // could also say setState({...state, selectedGod: index})
    setState({
      selectedGod: id,
      isSavedGods: state.isSavedGods,
      isDisplay: state.isDisplay,
    });
  };

  //sets Saved God State
  const setIsDisplay = (isDisplay: Boolean) => {
    setState({
      isSavedGods: state.isSavedGods,
      selectedGod: state.selectedGod,
      isDisplay: isDisplay,
    });
  };

  return (
    <div className="App">
      <img src="/icons/smiteLogo.png" alt="Smite" className="smiteLogo" />
      <GridRow>
        <GridCol desktop={3}>
          <GodsList
            isSavedGods={state.isSavedGods}
            setIsSavedGods={setIsSavedGod}
            selectedGod={state.selectedGod}
            setSelectedGod={setSelectedGod}
          />
        </GridCol>
        <GridCol desktop={9} className="rightHalf">
          <GridRow desktop={9} className="miniGrid">
            <GridCol desktop={1}></GridCol>
            {state.isDisplay && (
              <GridCol desktop={7}>
                <ItemsPage
                  //activeGod={itemService.getGod(state.selectedGod)}
                  isSavedGods={state.isSavedGods}
                  isDisplay={state.isDisplay}
                  setIsDisplay={setIsDisplay}
                />
              </GridCol>
            )}
            {!state.isDisplay && (
              <GridCol desktop={7}>
                <BuildPage
                  //activeGod={itemService.getGod(state.selectedGod)}
                  isSavedGods={state.isSavedGods}
                  isDisplay={state.isDisplay}
                  setIsDisplay={setIsDisplay}
                />
              </GridCol>
            )}
            <GridCol desktop={1}></GridCol>
          </GridRow>
        </GridCol>
      </GridRow>
    </div>
  );
};

export default App;
