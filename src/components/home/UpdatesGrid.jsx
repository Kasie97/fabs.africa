// src/components/home/UpdatesGrid.jsx
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import UpdateCard from "./UpdateCard";
import { Link } from "react-router-dom";
import { updates } from "../../data/updates";
import { BLOG_PATH } from "../../data/navigation";

export default function UpdatesGrid() {
  return (
    <section
      className="py-16 sm:py-24"
      style={{
        background:
          "radial-gradient(50% 40% at 90% 0%, rgba(0,0,0,0.035), transparent 70%), #fafafa",
      }}
    >
      <Container>
        <SectionHeading
          eyebrow="What's new"
          title="The latest from the Francophone Africa Business Summit"
          action={
            <Link
              to={BLOG_PATH}
              className="group inline-flex items-center gap-2 rounded-full border border-brand/30 bg-white px-5 py-2.5 text-sm font-semibold text-brand shadow-sm transition hover:-translate-y-0.5 hover:border-brand hover:shadow-md"
            >
              Go to Blog
              <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </Link>
          }
        />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {updates.map((item) => (
            <UpdateCard key={item.title} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}