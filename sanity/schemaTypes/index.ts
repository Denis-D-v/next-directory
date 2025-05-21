import { type SchemaTypeDefinition } from 'sanity';
import { author } from './author';
import { startup } from './startup';
import { markdownSchema } from 'sanity-plugin-markdown';

const schemaTypes: SchemaTypeDefinition[] = [author, startup, markdownSchema];

export default schemaTypes;
