
import { stringArg } from 'nexus';
import { ObjectDefinitionBlock } from 'nexus/dist/blocks';
import { GraphQResolver } from '../../../types';



interface GetAllUserRequest {

}


interface GetAllUserResponse {

}


const getAllUsers: GraphQResolver<GetAllUserRequest, GetAllUserResponse> = async (parent, args, ctx) => {

    try {
        return await ctx.prisma.product.findMany();
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
            name: stringArg()
        },
        type: 'User',
        resolve: getAllUsers
    })
}

