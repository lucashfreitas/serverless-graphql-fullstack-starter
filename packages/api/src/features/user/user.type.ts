
import { mutationType, objectType, queryType } from 'nexus';
import userMutations from "./user.mutations";
import userQueries from "./user.query";

export const UserType = objectType({
    name: 'User',
    definition(t) {
        t.int("id")
        t.string("first_name")
        t.string("last_name")
        t.string("email")
    }
});

export const Query = queryType({
    definition: (t) => {
        userQueries(t)

    }
})

export const Mutation = mutationType({
    definition: (t) => {
        userMutations(t)
    }
})



