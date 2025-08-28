// src/lib/sanity.client.ts
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "q74lfvn7",   // from sanity.json or sanity.io
  dataset: "production",          // usually "production"
  useCdn: false,                   // `false` if you want fresh data
  apiVersion: "2025-08-27",       // today's date to avoid breaking changes
});
