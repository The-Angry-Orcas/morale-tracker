import React, { useState } from "react";
import "./App.css";
import ButtonGrid from "./components/Molecules/ButtonGrid";

const App = () => {
  const [moraleSelection, setMoraleSelection] = useState("");
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Morale tracker</h1>
        {moraleSelection === "" ? (
          <ButtonGrid setMoraleSelection={setMoraleSelection} />
        ) : (
          <p>{moraleSelection} 🙌</p>
        )}
      </header>
    </div>
  );
};

export default App;
