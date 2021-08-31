
const Controller = require('../Controller/controller');

module.exports = {
  Query: {
    //(PostMan)==> query {cats{_id,name,username}}
    cats(_, Args, context, info) {
    return Controller.getCate(Args, context);
    },
    //(PostMan)==>query{getCateById(_id:"612d4e7d928655533cc2e3db"){name,_id,username }}
    getCateById(_, Args, __) { return Controller.getCateById(Args); }

  },

  Mutation: {
    //(PostMan)==> mutation { createCat(name: "Test Name", username: "Test UserName") { __typename  ... on Cat { _id name username}}}
    createCat(_, args) { return Controller.CreateCat(args); }
  }
}


