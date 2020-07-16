import React from "react";
import SavedGod from "./components/SavedGod";
import { GridRow, GridCol } from "./components/Grid";
import "./App.css";

const god1 = "Bellona";
const god2 = "Poseidon";
const god3 = "Neith";

function App() {
  return (
    <div className="App">
      <GridRow>
        <GridCol desktopSpan={3}>
          {/* <SavedGod>{god1}</SavedGod>
          <SavedGod></SavedGod>
          <SavedGod></SavedGod> */}
        </GridCol>
        <GridCol desktopSpan={9}></GridCol>
      </GridRow>
    </div>
  );
}

export default App;
