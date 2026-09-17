import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import BlogCard from "../components/blog/BlogCard";
import { CardSkeleton } from "../components/ui/Skeleton";
import { useSanityQuery } from "../hooks/useSanityQuery";
import { POST_LIST_QUERY } from "../lib/sanity/queries";

export default function BlogListing() {
  const { data: posts, loading, error, configured } = useSanityQuery(POST_LIST_QUERY);

  return (
    <>
      <section className="bg-paper border-b border-line">
        <Container className="py-14 sm:py-20">
          <p className="text-sm font-semibold text-gold-dark mb-3">News & Insights</p>
          <h1 className="font-display text-3xl sm:text-5xl font-medium text-ink max-w-3xl leading-tight">
            Afri-Spective Blog
          </h1>
          <p className="text-base sm:text-lg text-ink-soft mt-5 max-w-2xl leading-relaxed">
            Perspectives and analysis from members and industry practitioners, published straight
            from our Sanity content studio.
          </p>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          {!configured && (
            <div className="border border-line bg-white p-6 mb-10 max-w-2xl">
              <h2 className="font-display text-lg text-ink mb-2">Sanity isn't connected yet</h2>
              <p className="text-sm text-ink-soft leading-relaxed">
                Add your project credentials to <code className="text-ink font-mono text-xs bg-paper px-1 py-0.5">.env</code> (copy
                from <code className="text-ink font-mono text-xs bg-paper px-1 py-0.5">.env.example</code>) and this page will
                pull posts live from your Sanity dataset — no other code changes needed.
              </p>
            </div>
          )}

          {configured && error && (
            <div className="border border-line bg-white p-6 mb-10 max-w-2xl">
              <h2 className="font-display text-lg text-ink mb-2">Couldn't load posts</h2>
              <p className="text-sm text-ink-soft leading-relaxed">
                {error.message || "There was a problem reaching Sanity. Check your project ID, dataset and CORS origin settings."}
              </p>
            </div>
          )}

          {loading && (
            <SectionHeading eyebrow="Latest" title="Loading posts…" className="mb-10" />
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading &&
              Array.from({ length: 6 }).map((_, i) => <CardSkeleton key={i} />)}

            {!loading && posts?.length > 0 &&
              posts.map((post) => <BlogCard key={post._id} post={post} />)}
          </div>

          {!loading && configured && !error && posts?.length === 0 && (
            <p className="text-ink-soft">No posts published yet — check back soon.</p>
          )}
        </Container>
      </section>
    </>
  );
}
