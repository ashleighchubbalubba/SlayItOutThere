import React, { useEffect, useState, createContext } from 'react';
import logo from './logo.svg';
import { SmiteAPI } from './api/SmiteAPI';
import './App.css';
import SavedGod from './components/SavedGod';
import BuildView from './components/BuildView';
import ContextTestComponent from './components/context-test-component';

import { GridRow, GridCol } from './components/Grid';
import './App.css';

// TO DO - source devID and apiKey from ENV vars
const context = createContext<SmiteAPI | null>(null);
export const SmiteApiProvider = context.Provider;
export const SmiteApiConsumer = context.Consumer;

function App() {
  const [smiteApi, setSmiteApi] = useState(
    new SmiteAPI('3549', '40E0A5348C974D8391B5B4AE6993B11B')
  );
  useEffect(() => {
    smiteApi.createSession();
  }, []);

  const savedGods = [
    {
      name: 'Bellona',
      thumbnail: '/assets/bellona.jpg',
    },
    {
      name: 'Ao Kuang',
      thumbnail: '/assets/aokuang.jpg',
    },
    {
      name: 'Jing Wei',
      thumbnail: '/assets/jingwei.jpg',
    },
  ];

  return (
    <SmiteApiProvider value={smiteApi}>
      <div className="App">
        <GridRow>
          <GridCol desktopSpan={3}>
            {savedGods.map(function (god) {
              return <SavedGod name={god.name} thumbnail={god.thumbnail} />;
            })}
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
