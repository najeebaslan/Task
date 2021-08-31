    'use strict';
    const express = require("express");
    const morgan = require("morgan");
    const { ApolloServer, } = require("apollo-server-express");
    const { typeDefs } = require("./Graphql/Model/typeDefs");
    const resolvers  = require("./Graphql/Route/index-route");
    const { CustomError } = require('./errors');
    const PORT = process.env.PORT || 5000;
    const cors = require("cors");
    const app = express();
    app.use(express.json());
    app.use(cors());
    app.use(morgan('short'));
    const DATABASE=require('./utils/db')
    const corsOptions = {
    origin: '*',
    credentials: true,
    exposedHeaders: ['Authorization'],
    }

    async function startExpressApolloServer() {
    const server = new ApolloServer({
    typeDefs, resolvers,
    context: ({ req, res }) => ({ req, res, }),
    formatError: (err) => { console.log(err); return CustomError(err) },
    });
    await server.start();

    server.applyMiddleware({ app, cors: corsOptions, path: '/api/graphql', });

    await new Promise(resolve => app.listen({ port: PORT }, resolve));
    console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);
    return { server, app };
    }

    startExpressApolloServer();
    DATABASE()