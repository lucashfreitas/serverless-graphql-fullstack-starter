import { RandomId } from '@app/lib';
import { stringArg } from 'nexus';
import { ObjectDefinitionBlock } from 'nexus/dist/blocks';
import { GraphQResolver } from '../../../types';

interface AddUserRequest {
    name: string;
}

interface UserResponse {
    name: string;
}

const addUser: GraphQResolver<AddUserRequest, UserResponse> = async (parent, args, ctx) => {
    const response: UserResponse = {
        name: args.name
    }

    const params: AWS.DynamoDB.DocumentClient.PutItemInput = {
        TableName: process.env.USER_TABLE,
        Item: {
            id: RandomId.next(),
            name: args.name
        }
    }


    const dynamoResponse = await ctx.dynamodb.put(params).promise();
    console.log(dynamoResponse);

    return response;


}

export default (t: ObjectDefinitionBlock<"Mutation">) => {
    t.field('addUser', {
        args: {
            name: stringArg({})
        },
        type: 'User',
        resolve: addUser
    })


}

