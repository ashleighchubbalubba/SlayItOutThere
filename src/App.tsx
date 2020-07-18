import React from 'react';
import SavedGod from './components/SavedGod';
import BuildView from './components/BuildView';

import { GridRow, GridCol } from './components/Grid';
import './App.css';

function App() {
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
