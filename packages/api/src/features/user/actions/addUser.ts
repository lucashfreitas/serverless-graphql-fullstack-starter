import { User } from '@prisma/client';
import { Action } from '../../../action';
import { AddUserRequest } from '../requests';




const addUserAction: Action<AddUserRequest, User> = async (req, ctx) => {

    const user = await ctx.prisma.user.create({
        data: {
            email: req.email,
            first_name: req.name,
            last_name: req.name
        }
    })
    return user;

}


export default addUserAction

