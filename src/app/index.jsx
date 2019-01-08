import React from 'react';
import Tank from './tank/Tank.jsx';
import { GameStoreContext } from './store/GameStore.js';

console.log([11, GameStoreContext.Provider]);

export default class App extends React.Component {
  render() {
    return (
      <div>
        Hello
        <GameStoreContext.Provider value="test">
          <Tank />
        </GameStoreContext.Provider>
      </div>
    );
  }
}
