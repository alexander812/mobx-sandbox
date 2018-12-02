import { observable, autorun } from 'mobx';

export default class State {
  @observable test = 1;

  constructor() {

    autorun(()=>{
      console.log('test', this.test);
    });
    setInterval(() => {
      this.test += 1;
    }, 1000);
  }
}
