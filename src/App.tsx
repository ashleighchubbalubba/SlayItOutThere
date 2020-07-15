import SavedGod from './components/SavedGod';
import BuildView from './components/BuildView';
import React, { useEffect } from 'react';
import { SmiteAPI } from './api/SmiteAPI';
import './App.css';

import { GridRow, GridCol } from './components/Grid';
import './App.css';

function App() {

  // TO DO - source devID and apiKey from ENV vars
  const smiteApi = new SmiteAPI('3549', '40E0A5348C974D8391B5B4AE6993B11B');

  useEffect(() => {
    smiteApi.createSession();
  })

  return (
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
    </div>
  );
}

export default App;
