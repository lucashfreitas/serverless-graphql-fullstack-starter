import { GraphqlContext } from './graphql/context';


export type GraphQResolver<T, S> = (parent: any, args: T, ctx: GraphqlContext) => S | Promise<S>