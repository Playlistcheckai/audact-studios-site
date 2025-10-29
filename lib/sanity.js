import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "dzxweft1",  // your Sanity project ID
  dataset: "production",  // your default dataset
  apiVersion: "2025-10-29", // today’s date
  useCdn: true,  // makes it fast for reads
});
