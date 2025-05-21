import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId } from '../env';

//Импортируем переменные окружения из другого файла (env.ts). Эти переменные указывают:
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
