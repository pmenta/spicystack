import postgres from 'postgres'
import { drizzle } from 'drizzle-orm/postgres-js'

import * as schema from './schema';

import { env } from '@/utils/env'

const connectionString = env.DATABASE_URL
const client = postgres(connectionString)

export const db = drizzle(client, {
  logger: true,
  schema: { ...schema }
});
