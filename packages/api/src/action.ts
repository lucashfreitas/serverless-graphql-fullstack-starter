import { GraphqlContext } from './graphql/context';





export type Action<T, S> = (req: T, ctx: GraphqlContext) => S | Promise<S>