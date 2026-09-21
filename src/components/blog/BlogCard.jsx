import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { urlFor } from "../../lib/sanity/image";
import { NEWSLETTER_PATH } from "../../data/navigation";

function formatDate(dateString) {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogCard({ post }) {
  const imageSrc = post.mainImage
    ? urlFor(post.mainImage).width(640).height(400).url()
    : "/media/placeholder.png";

  return (
    <Link
      to={`${NEWSLETTER_PATH}/${post.slug}`}
      className="group flex flex-col bg-white border border-line border-t-4 border-t-brand overflow-hidden h-full transition-colors hover:bg-paper"
    >
      <div className="aspect-[16/10] overflow-hidden bg-paper">
        <img
          src={imageSrc}
          alt=""
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col flex-1 p-6">
        {post.category && (
          <span className="text-xs font-bold text-brand">{post.category}</span>
        )}
        <span className="text-xs text-ink-soft mt-1">{formatDate(post.publishedAt)}</span>
        <h3 className="font-display text-xl font-bold text-ink mt-3 leading-snug">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="text-sm text-ink-soft mt-3 leading-relaxed flex-1">{post.excerpt}</p>
        )}
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink mt-5">
          Read more
          <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}