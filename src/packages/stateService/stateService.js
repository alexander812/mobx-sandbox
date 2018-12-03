import { observable, autorun } from 'mobx';

const fixtures = {
  '/platform':{
    theme: 'dark',
    lang : 'ru',
    user_option:{
      deal_sum: 200
    },
    balance: 200
  },
  '/user': {
    data:{
      id: 1,
      name: 'mamba'
    },
    email: 'name@domain.com',
    vip: true
  }
};



class StateService {

  options;
  loadCache = {};

  loadState = (route, fields) =>{

    return new Promise((resolve)=>{

      const fixture = fixtures[route];
      let request = null;

      if(fixture){
        if(!this.loadCache[route]){
          this.loadCache[route] = {};
        }

        request = {};

        fields.forEach((field)=>{

          if(typeof this.loadCache[route][field] !== 'undefined'){
            request[field] = this.loadCache[route][field];
          } else if(typeof fixture[field] !== 'undefined'){
            request[field] = fixture[field];
            this.loadCache[route][field] = fixture[field];
          }

        });

        resolve(request)
      }
    });
  };

  getState = (route, fields) =>{

    const option = this.options[route];
    let backFields = [];
    const parsers = [];

    fields.forEach((field)=>{
      if(option[field]){
        backFields = backFields.concat(option[field].fields);
        parsers.push(option[field].parse);
      }

    });

    if(backFields.length){
      return this.loadState(route, backFields).then((response)=>{

        let result = {};
        parsers.forEach((parser)=>{
          const parsedData =  parser(response);

          Object.keys(parsedData).forEach((key)=>{
            if(key in this){
              this[key] = parsedData[key];
            }
          });

          Object.assign(result, parser(response));
        });

        return Promise.resolve(result);

      })
    } else {

      return Promise.resolve(null);
    }

  }
}



class BinaryStateService extends StateService{


  options = {
    '/platform':{
      theme: {
        fields:['theme'],
        parse:({theme})=>({theme})
      },
      userOptions: {
        fields:['user_option'],
        parse({user_option}){
          return {userOptions: user_option}
        }
      },


    },
    '/user': {
      user: {
        fields:['data', 'email'],
        parse({data, email}){
          return {user: {...data, email} }
        }
      },
    }
  };

  @observable theme = undefined;
  @observable.ref user = undefined;

}



const service = new BinaryStateService();

export default service;
