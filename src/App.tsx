import React, { useEffect, useState, createContext } from 'react';
import logo from './logo.svg';
import { SmiteAPI } from './api/SmiteAPI';
import './App.css';
import SavedGod from './components/SavedGod';
import BuildView from './components/BuildView';
import ContextTestComponent from './components/context-test-component';

import { GridRow, GridCol } from './components/Grid';
import './App.css';

const god1 = 'Bellona';
const god2 = 'Poseidon';
const god3 = 'Neith';

  // TO DO - source devID and apiKey from ENV vars
const context = createContext<SmiteAPI | null>(null);
export const SmiteApiProvider = context.Provider; 
export const SmiteApiConsumer = context.Consumer;

function App() {

  const [smiteApi, setSmiteApi] = useState(new SmiteAPI('3549', '40E0A5348C974D8391B5B4AE6993B11B'));
  useEffect(() => {
    smiteApi.createSession();
  }, [])

  return (
  <SmiteApiProvider value={smiteApi}>
    <div className="App">
      <GridRow>
        <GridCol desktopSpan={3}>
          <SavedGod name="Bellona" />
          <SavedGod name="Poseidon" />
          <SavedGod name="Neith" />
          <SavedGod name="Jing Wei" />
          <SavedGod name="Au Kuang" />
          <SavedGod name="EllieBear" />
        </GridCol>
        <GridCol desktopSpan={9}>
          <BuildView />
        </GridCol>
      </GridRow>
      <ContextTestComponent></ContextTestComponent>
    </div>
  </SmiteApiProvider>
  );
}

export default App;
