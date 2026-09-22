import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import BlogCard from "../components/blog/BlogCard";
import { CardSkeleton } from "../components/ui/Skeleton";
import { useSanityQuery } from "../hooks/useSanityQuery";
import { POST_LIST_QUERY, POSTS_BY_CATEGORY_QUERY } from "../lib/sanity/queries";
import { NEWSLETTER_PATH } from "../data/navigation";

// Two entry points share this listing: Newsletter (mode="category", filtered
// to posts tagged with that category in Sanity) and Blog (mode="all", every
// published post). Tag a post's `category` field in Sanity with "Newsletter"
// for it to show up on the Newsletter page — it'll still appear on the Blog
// page too, since Blog shows everything.
export default function BlogListing({
  mode = "all",
  category,
  title = "Newsletter",
  eyebrow = "Insights",
  intro = "News, updates and insights from the Francophone Africa Business Summit.",
  basePath = NEWSLETTER_PATH,
}) {
  const query = mode === "category" ? POSTS_BY_CATEGORY_QUERY : POST_LIST_QUERY;
  const params = mode === "category" ? { category } : {};
  const { data: posts, loading, error, configured } = useSanityQuery(query, params);

  return (
    <>
      <section className="bg-paper border-b border-line">
        <Container className="py-14 sm:py-20">
          <p className="text-sm font-bold text-brand mb-3">{eyebrow}</p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-ink max-w-3xl leading-tight">
            {title}
          </h1>
          <p className="text-base sm:text-lg text-ink-soft mt-5 max-w-2xl leading-relaxed">
            {intro}
          </p>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          {!configured && (
            <div className="border border-line bg-white p-6 mb-10 max-w-2xl">
              <h2 className="font-display text-lg font-bold text-ink mb-2">Sanity isn't connected yet</h2>
              <p className="text-sm text-ink-soft leading-relaxed">
                Add your project credentials to <code className="text-ink font-mono text-xs bg-paper px-1 py-0.5">.env</code> (copy
                from <code className="text-ink font-mono text-xs bg-paper px-1 py-0.5">.env.example</code>) and this page will
                pull posts live from your Sanity dataset — no other code changes needed.
              </p>
            </div>
          )}

          {configured && error && (
            <div className="border border-line bg-white p-6 mb-10 max-w-2xl">
              <h2 className="font-display text-lg font-bold text-ink mb-2">Couldn't load posts</h2>
              <p className="text-sm text-ink-soft leading-relaxed">
                {error.message || "There was a problem reaching Sanity. Check your project ID, dataset and CORS origin settings."}
              </p>
            </div>
          )}

          {loading && (
            <SectionHeading eyebrow={eyebrow} title="Loading posts…" className="mb-10" />
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading &&
              Array.from({ length: 6 }).map((_, i) => <CardSkeleton key={i} />)}

            {!loading && posts?.length > 0 &&
              posts.map((post) => (
                <BlogCard key={post._id} post={post} basePath={basePath} />
              ))}
          </div>

          {!loading && configured && !error && posts?.length === 0 && (
            <p className="text-ink-soft">No posts published yet — check back soon.</p>
          )}
        </Container>
      </section>
    </>
  );
}