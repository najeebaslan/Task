const getCat = require('./resolvers');
const createCate = require('./resolvers');

module.exports = {

    Query: {
        ...getCat.Query,//This Is For Query Cat

    },
    Mutation: {
        ...createCate.Mutation,//This Is For Mutation Cat

    },
};
