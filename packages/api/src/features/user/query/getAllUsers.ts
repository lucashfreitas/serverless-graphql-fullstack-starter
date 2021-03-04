import { ObjectDefinitionBlock, stringArg } from '@nexus/schema/dist/core';
import { GraphQResolver } from '../../../types';



interface GetAllUserRequest {

}


interface GetAllUserResponse {

}


const getAllUsers: GraphQResolver<GetAllUserRequest, GetAllUserResponse> = async (parent, args, ctx) => {
    const params: AWS.DynamoDB.DocumentClient.ScanInput = {
        TableName: process.env.USER_TABLE,
    }
    try {
        const response = await ctx.dynamodb.scan(params).promise();
        return response.Items;
    }

    catch (err) {
        //logger ctx.logger.log(err)
        console.error(err)
    }

    return null;


}

export default (t: ObjectDefinitionBlock<"Query">) => {
    t.field('allUsers', {
        args: {
            name: stringArg({ required: true })
        },
        type: 'User',
        resolve: getAllUsers
    })


}

