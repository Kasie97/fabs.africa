import { useEffect, useState } from "react";
import { sanityClient, sanityConfigured } from "../lib/sanity/client";

// Fetches a GROQ query on mount (and whenever params change).
// Returns { data, loading, error, configured } — `configured` is false until
// real Sanity credentials are in .env, so callers can show a helpful state
// instead of a raw fetch error.
export function useSanityQuery(query, params = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const paramsKey = JSON.stringify(params);

  useEffect(() => {
    if (!sanityConfigured) {
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    sanityClient
      .fetch(query, params)
      .then((result) => {
        if (!cancelled) {
          setData(result);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err);
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, paramsKey]);

  return { data, loading, error, configured: sanityConfigured };
}
