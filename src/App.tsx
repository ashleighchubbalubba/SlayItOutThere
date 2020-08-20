import React, { useState } from 'react';
import GodsList from './components/GodsList';
import ItemsGrid from './components/ItemsGrid';
import BuildGrid from './components/BuildGrid';
import { savedGods, allGods } from './constants/smiteData';
import { God as GodType } from './types/';
import { GridRow, GridCol } from './components/Grid';
import { GlobalState } from './types';
import './App.css';

const App = () => {
  //defines initial values of the states
  const initialState: GlobalState = {
    isSavedGods: true,
    selectedGod: 0,
    savedGodsList: savedGods as Array<GodType>,
  };

  //what stores and intializes the default state
  const [state, setState] = useState(initialState);

  //sets Saved God State
  const setIsSavedGod = (isSavedGods: Boolean) => {
    setState({
      isSavedGods: isSavedGods,
      selectedGod: state.selectedGod,
      savedGodsList: state.savedGodsList,
    });
  };

  //sets Selected God State
  const setSelectedGod = (id: number) => {
    // could also say setState({...state, selectedGod: index})
    setState({
      selectedGod: id,
      isSavedGods: state.isSavedGods,
      savedGodsList: state.savedGodsList,
    });
  };

  //what gets the state
  const getSelectedGod = (id: number) => {
    if (state.isSavedGods) return state.savedGodsList.find((god) => god.id === id);
    else return allGods.find((god) => god.id === id);
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
            savedGodsList={state.savedGodsList}
          />
        </GridCol>
        <GridCol desktop={9} className="rightHalf">
          <GridRow desktop={9} className="miniGrid">
            {state.isSavedGods && <GridCol desktop={2}></GridCol>}
            {state.isSavedGods && (
              <GridCol desktop={5}>
                <ItemsGrid activeGod={getSelectedGod(state.selectedGod)} />
              </GridCol>
            )}
            {state.isSavedGods && <GridCol desktop={2}></GridCol>}
            {!state.isSavedGods && <GridCol desktop={1}></GridCol>}
            {!state.isSavedGods && (
              <GridCol desktop={7}>
                <BuildGrid activeGod={getSelectedGod(state.selectedGod)} />
              </GridCol>
            )}
            {!state.isSavedGods && <GridCol desktop={1}></GridCol>}
          </GridRow>
        </GridCol>
      </GridRow>
    </div>
  );
};

export default App;
