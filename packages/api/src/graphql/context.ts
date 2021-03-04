import { APIGatewayEvent, Context } from 'aws-lambda';
import AWS from 'aws-sdk';




export type GraphqlContext = {
    event: APIGatewayEvent,
    dynamodb: AWS.DynamoDB.DocumentClient,
    context: Context
}

