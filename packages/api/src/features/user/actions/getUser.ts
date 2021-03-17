
import { User } from '@prisma/client';
import { Action } from '../../../action';
import { GetUserRequest } from '../requests';





export const getUserAction: Action<GetUserRequest, User | null> = async (req, ctx) => {
    //todo: infer nullable type - prismic issue
    const user = await ctx.prisma.user.findUnique({
        rejectOnNotFound: false,
        where: {
            id: req.id
        }
    });

    if (!user) {
        return null;
    }

    return user;
}


