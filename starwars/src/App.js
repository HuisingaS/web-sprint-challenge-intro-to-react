import React from 'react';
import './App.css';
import Character from './components/Character'

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const App = () => {
  return (
    <div className="container">
      <div className="App">
        <h1 className="Header">Rick & Morty</h1>
        <h2 className="CharHeader">Characters</h2>
        <h3 className="CharFew">(a few of them...)</h3>
      </div>
          <div>
            <Character />
          </div>
    </div>
  );
};

export default App;