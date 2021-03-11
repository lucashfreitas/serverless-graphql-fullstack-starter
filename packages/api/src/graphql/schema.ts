
import { makeSchema } from 'nexus';
import { join } from 'path';
import * as types from '../features';


const schema = makeSchema({
    plugins: [
    ],
    outputs: {
        typegen: join(__dirname, './generated/nexus.ts'),
        schema: join(__dirname, './generated/schema.graphql'),

    },
    shouldGenerateArtifacts: true,
    shouldExitAfterGenerateArtifacts: false,
    types,
});


export default schema