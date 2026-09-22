// Inside src/components/home/UpdatesGrid.jsx
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import UpdateCard from "./UpdateCard";
import { updates } from "../../data/updates";
import { BLOG_PATH } from "../../data/navigation";

export default function UpdatesGrid() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="What's new"
          title="The latest from the Francophone Africa Business Summit"
          action={
            <Button to={BLOG_PATH} variant="outline">
              Go to Blog
            </Button>
          }
        />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {updates.map((item) => (
            <UpdateCard key={item.title} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}