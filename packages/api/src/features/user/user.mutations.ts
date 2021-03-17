import { User } from '@prisma/client';
import { stringArg } from 'nexus';
import { ObjectDefinitionBlock } from 'nexus/dist/blocks';
import { GraphQResolver } from '../../types';
import addUserAction from './actions/addUser';
import { AddUserRequest } from './requests';



const addUser: GraphQResolver<AddUserRequest, User | null> = async (parent, args, ctx) => {
    const user = await addUserAction(args, ctx)
    return user;
}

export default (t: ObjectDefinitionBlock<"Mutation">) => {
    t.field('addUser', {
        args: {
            name: stringArg({}),
            first_name: stringArg({}),
            last_name: stringArg({}),
            email: stringArg({})
        },
        type: 'User',
        resolve: addUser
    })
}