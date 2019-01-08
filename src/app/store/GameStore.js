import { observable, action } from 'mobx';
import React from 'react';

class GameStore {
  @observable started = false;

  @action
  startGame() {
    this.started = true;
  }
}



export const GameStoreContext = React.createContext('dfdf');


export default GameStore;
