import { User } from '@prisma/client';
import { intArg } from 'nexus';
import { ObjectDefinitionBlock } from 'nexus/dist/blocks';
import { GraphQResolver } from '../../types';
import { getAllUsersAction } from './actions/getAllUsers';
import { getUserAction } from './actions/getUser';
import { GetAllUsersRequest, GetUserRequest } from './requests';




const getUser: GraphQResolver<GetUserRequest, User> = async (parent, args, ctx) => {
    const users = await getUserAction(args, ctx)
    return users;
}

const getAllUsers: GraphQResolver<GetAllUsersRequest, User[]> = async (parent, args, ctx) => {
    const users = await getAllUsersAction(args, ctx)
    return users;
}


export default (t: ObjectDefinitionBlock<"Query">) => {
    t.field('allUsers', {
        type: 'User',
        resolve: getAllUsers
    });

    t.field('user', {
        args: {
            id: intArg({}),
        },
        type: 'User',
        resolve: getUser
    })
}