
import { User } from '@prisma/client';
import { Action } from '../../../action';
import { GetAllUsersRequest } from '../requests';

export const getAllUsersAction: Action<GetAllUsersRequest, User[]> = async (req, ctx) => {
    const users = await ctx.prisma.user.findMany();
    return users;
}


