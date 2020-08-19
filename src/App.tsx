import React, { useState } from 'react';
import GodsList from './components/GodsList';
import ItemsGrid from './components/ItemsGrid';
import { savedGods } from './constants/smiteData';
import { God as GodType } from './types/';
import { GridRow, GridCol } from './components/Grid';
import { GlobalState } from './types';
import './App.css';

const App = () => {

  //defines initial values of the states
  const initialState: GlobalState = {
    selectedGod: 0,
    savedGodsList: savedGods as Array<GodType>,
  };

  //what stores and intializes the default state
  const [state, setState] = useState(initialState);

  //what set the state
  const setSelectedGod = (id: number) => {
    // could also say setState({...state, selectedGod: index})
    setState({ selectedGod: id, savedGodsList: state.savedGodsList });
  };

  //what gets the state
  const getSelectedGod = (id: number) => {
    return state.savedGodsList.find((god) => god.id === id);
  };

  return (
    <div className="App">
      <img src="/icons/smiteLogo.png" alt="Smite" className="smiteLogo" />
      <GridRow>
        <GridCol desktop={3}>
          <GodsList
            selectedGod={state.selectedGod}
            godList={state.savedGodsList}
            setSelectedGod={setSelectedGod}
          />
        </GridCol>
        <GridCol desktop={9} className="rightHalf">
          <GridRow desktop={9} className="miniGrid">
            <GridCol desktop={2}></GridCol>
            <GridCol desktop={5}>
              <ItemsGrid activeGod={getSelectedGod(state.selectedGod)} />
            </GridCol>
            <GridCol desktop={2}></GridCol>
          </GridRow>
        </GridCol>
      </GridRow>
    </div>
  );
};

export default App;
