
import { PrismaClient } from '@prisma/client';
import { ApolloServer } from 'apollo-server-lambda';
import { APIGatewayEvent, Context } from 'aws-lambda';
import { DynamoDB } from "aws-sdk";
import ApiRequest from '../request';
import { GraphqlContext } from './context';
import nexusSchema from "./schema";

const dynamodb = new DynamoDB.DocumentClient();
const prisma = new PrismaClient()




const server = new ApolloServer({
  schema: nexusSchema,
  introspection: true,
  playground: true,
  context: (event: APIGatewayEvent, context: Context): GraphqlContext => ({
    request: new ApiRequest(event, context),
    dynamodb,
    prisma
  }),
});



export const handler = (event, lambdaContext, callback) => {
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









