import { makeSchema } from '@nexus/schema/dist/builder';
import { join } from 'path';
import * as types from '../features';


const schema = makeSchema({
    plugins: [
    ],
    typegenAutoConfig: {
        contextType: 'ctx.GraphqlContext',
        sources: [
            {
                source: require.resolve('./context'),
                alias: 'ctx',
            },
        ],
    },

    outputs: {
        typegen: join(__dirname, './generated/nexus.ts'),
        schema: join(__dirname, './generated/schema.graphql'),

    },
    shouldExitAfterGenerateArtifacts: Boolean(
        false,
    ),
    types,
});


export default schema