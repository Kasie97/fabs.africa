import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import UpdateCard from "./UpdateCard";
import { updates } from "../../data/updates";
import { NEWSLETTER_PATH } from "../../data/navigation";

export default function UpdatesGrid() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="What's new"
          title="The latest from the Francophone Africa Business Summit"
          action={
            <Button to={NEWSLETTER_PATH} variant="outline">
              View the newsletter
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