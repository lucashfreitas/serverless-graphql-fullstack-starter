import { mutationType, objectType, queryType } from '@nexus/schema';
import addUser from './mutation/addUser';
import getAllUsers from './query/getAllUsers';

export const UserType = objectType({
    name: 'User',
    definition(t) {
        t.int("id")
        t.string("name")
    }
});

export const Query = queryType({
    definition: (t) => {
        getAllUsers(t)

    }
})


export const Mutation = mutationType({
    definition: (t) => {
        addUser(t)

    }
})



