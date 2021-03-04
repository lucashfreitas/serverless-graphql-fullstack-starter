import { ApolloServer } from 'apollo-server-lambda';
import { DynamoDB } from "aws-sdk";
import { GraphqlContext } from './context';
import schema from "./schema";


//create all context providers
const context = {
  dynamodb: new DynamoDB.DocumentClient()
};


const server = new ApolloServer({
  schema,
  introspection: true,
  playground: true,
  context: (req): GraphqlContext => ({
    ...req,
    ...context
  }),
});



const handler = (event, lambdaContext, callback) => {
  // Playground handler
  if (event.httpMethod === 'GET') {
    server.createHandler()(
      { ...event, path: event.requestContext.path || event.path },
      lambdaContext,
      callback,
    );
  } else {
    server.createHandler()(event, lambdaContext, callback);
  }
};

export default handler;








