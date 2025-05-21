import { type SchemaTypeDefinition } from 'sanity';
import { author } from './author';
import { startup } from './startup';
// import { markdownSchema } from 'sanity-plugin-markdown';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, startup],
};
