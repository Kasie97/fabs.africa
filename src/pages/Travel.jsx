// Inside src/pages/Travel.jsx
import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

export default function Travel() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-bold text-brand mb-3">Resources</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-5">Travel</h1>
          <p className="text-ink-soft leading-relaxed mb-8">
            Everything you need to plan your trip to Lagos — where to stay, and how to get
            around while you're here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/resources/accommodation" variant="outline">
              Accommodation
            </Button>
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center px-6 py-3 text-[15px] font-semibold text-ink hover:text-brand"
            >
              Ask about transport →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}