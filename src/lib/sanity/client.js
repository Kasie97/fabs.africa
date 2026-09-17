import { createClient } from "@sanity/client";

// Swap the values in .env for your real Sanity project — nothing else in the
// app needs to change. See .env.example for the required variable names.
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET || "production";
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || "2024-01-01";
const token = import.meta.env.VITE_SANITY_TOKEN || undefined;

export const sanityConfigured = Boolean(projectId);

export const sanityClient = createClient({
  projectId: projectId || "placeholder-project-id",
  dataset,
  apiVersion,
  token,
  // A token implies you may be reading drafts/private data, which the CDN
  // doesn't serve — fall back to the live API in that case.
  useCdn: !token,
});
