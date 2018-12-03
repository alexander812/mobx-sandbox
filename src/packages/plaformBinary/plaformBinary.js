import stateService from '../stateService/stateService.js';






Promise.all([
  stateService.getState('/user', ['user']),
  stateService.getState('/platform', ['theme', 'userOptions']),
]).then((data)=>{
  console.log(['data', data]);
});




/*
stateService.getState('/platform', ['theme', 'politics']).then((response)=>{
  console.log(['response1', response]);
});
stateService.getState('/platform', ['theme', 'user_option']).then((response)=>{
  console.log(['response2', response]);
});
*/
