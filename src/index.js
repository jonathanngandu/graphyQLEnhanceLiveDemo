import { ApolloServer } from 'apollo-server';
import typeDefs from './schemas/schema';
import ProgramEventApi from './datasources/programEvent';
import AwkApi from './datasources/awk';
import resolvers from './resolvers/resolvers';

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    dataSources: () => ({
        programEventApi: new ProgramEventApi(),
        awkApi: new AwkApi()
      })
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
