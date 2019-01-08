import React from 'react';
import './tank.scss';
import { GameStoreContext } from '../store/GameStore.js';


class Canon extends React.Component {


  static contextType = GameStoreContext;

  render(){
    console.log(['Canon', this.context]);
    return <div>Canon</div>;
  }
}



class Tank extends React.Component {


  //static contextType = GameStoreContext;

  render(){
    //console.log(['render', this]);
    return <div className="tank">12121

      <GameStoreContext.Consumer>
        {(context) => {
        console.log(['context', context]);
        }
        }
      </GameStoreContext.Consumer>


    <Canon />
    </div>;
  }
}

export default Tank;
