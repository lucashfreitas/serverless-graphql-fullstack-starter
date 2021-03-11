import { PrismaClient } from '@prisma/client';
import AWS from 'aws-sdk';
import ApiRequest from '../request';


export type GraphqlContext = {
    dynamodb: AWS.DynamoDB.DocumentClient,
    request: ApiRequest,
    prisma: PrismaClient,
}

