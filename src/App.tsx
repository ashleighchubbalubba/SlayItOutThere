import React, { useState, createContext } from 'react';
import './App.css';

import GodsList from './components/GodsList';
import ItemsGrid from './components/ItemsGrid';

import { GridRow, GridCol } from './components/Grid';
import './App.css';
import { SelectedGodContextType } from './types';

//the Context Object, a template for the code below
//defines skeleton of the context
export const SelectedGodContext = createContext<SelectedGodContextType>({
  //a State Property of the Context
  selectedGodState: {
    //what defines the state
    selectedGod: -1,
    //used to change the state
    setSelectedGod: () => undefined,
  },
});

const App = () => {

  const sampleItems = [
    {
      name: 'Warriors Blessing',
      thumbnail: '/items/warriors-blessing.webp',
    },
    {
      name: 'Berserkers Shield',
      thumbnail: '/items/berserkers-shield.webp',
    },
    {
      name: 'Ninja Tabi',
      thumbnail: '/items/ninja-tabi.webp',
    },
    {
      name: 'Frostbound Hammer',
      thumbnail: '/items/frostbound-hammer.webp',
    },
    {
      name: 'Hastened Katana',
      thumbnail: '/items/hastened-katana.webp',
    },
    {
      name: 'Wind Demon',
      thumbnail: '/items/wind-demon.webp',
    },
    {
      name: 'Guardians Blessing',
      thumbnail: '/items/guardians-blessing.webp',
    },
    {
      name: 'Gauntlet Of Thebes',
      thumbnail: '/items/gauntlet-of-thebes.webp',
    },
    {
      name: 'Talaria Boots',
      thumbnail: '/items/talaria-boots.webp',
    },
    {
      name: 'Relic Dagger',
      thumbnail: '/items/relic-dagger.webp',
    },
    {
      name: 'Sovereignty',
      thumbnail: '/items/sovereignty.webp',
    },
    {
      name: 'Heartward Amulet',
      thumbnail: '/items/heartward-amulet.webp',
    },
  ];

  const warriorBuild = [
    {
      name: 'Warriors Blessing',
      thumbnail: '/items/warriors-blessing.webp',
    },
    {
      name: 'Berserkers Shield',
      thumbnail: '/items/berserkers-shield.webp',
    },
    {
      name: 'Ninja Tabi',
      thumbnail: '/items/ninja-tabi.webp',
    },
    {
      name: 'Frostbound Hammer',
      thumbnail: '/items/frostbound-hammer.webp',
    },
    {
      name: 'Hastened Katana',
      thumbnail: '/items/hastened-katana.webp',
    },
    {
      name: 'Wind Demon',
      thumbnail: '/items/wind-demon.webp',
    },
  ];

  const supportBuild = [
    {
      name: 'Guardians Blessing',
      thumbnail: '/items/guardians-blessing.webp',
    },
    {
      name: 'Gauntlet Of Thebes',
      thumbnail: '/items/gauntlet-of-thebes.webp',
    },
    {
      name: 'Talaria Boots',
      thumbnail: '/items/talaria-boots.webp',
    },
    {
      name: 'Relic Dagger',
      thumbnail: '/items/relic-dagger.webp',
    },
    {
      name: 'Sovereignty',
      thumbnail: '/items/sovereignty.webp',
    },
    {
      name: 'Heartward Amulet',
      thumbnail: '/items/heartward-amulet.webp',
    },
  ];

  const sampleGods = [
    {
      name: 'Bellona',
      thumbnail: '/icons/bellona.jpg',
      build: warriorBuild,
    },
    {
      name: 'Jing Wei',
      thumbnail: '/icons/jingwei.jpg',
      build: supportBuild,
    },
    {
      name: 'Ao Kuang',
      thumbnail: '/icons/aokuang.jpg',
      build: supportBuild,
    },
    {
      name: 'Mulan',
      thumbnail: '/icons/mulan.jpeg',
      build: warriorBuild,
    },
  ];

  //uses the Context template from above
  const [selectedGod, setSelectedGod] = useState(-1);

  return (
    //tag that wraps everything that needs the global context
    <SelectedGodContext.Provider
      //actually defines the default value, with what is written above
      value={{
        selectedGodState: { selectedGod, setSelectedGod },
      }}
    >
      <div className="App">
        <img src="/icons/smiteLogo.png" alt="Smite" className="smiteLogo" />
        <GridRow>
          <GridCol desktop={3}>
            <GodsList godsList={sampleGods} />
          </GridCol>
          <GridCol desktop={9} className="rightHalf">
            <GridRow desktop={9} className="miniGrid">
              <GridCol desktop={2}></GridCol>
              <GridCol desktop={5}>
                <ItemsGrid itemsList={supportBuild} />
              </GridCol>
              <GridCol desktop={2}></GridCol>
            </GridRow>
          </GridCol>
        </GridRow>
      </div>
    </SelectedGodContext.Provider>
  );
};

export default App;
