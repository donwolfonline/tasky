import { createClient, type Client } from "@libsql/client";
import { env } from "~/env";
import { drizzle } from "drizzle-orm/libsql";

import * as schema from "./schema";

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
  client: Client | undefined;
};

const dbUrl = env.TURSO_DATABASE_URL.replace(/^libsql:/, 'https:');

export const client =
  globalForDb.client ??
  createClient({ 
    url: dbUrl,
    authToken: env.TURSO_AUTH_TOKEN 
  });

if (env.NODE_ENV !== "production") globalForDb.client = client;

export const db = drizzle(client, { schema });
