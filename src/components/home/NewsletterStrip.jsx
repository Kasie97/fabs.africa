import { useState } from "react";
import Container from "../ui/Container";

export default function NewsletterStrip() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="border-y border-line">
      <Container className="py-14 sm:py-16">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
            Subscribe to our newsletter
          </h2>
          <p className="text-sm text-ink-soft mt-2">
            The latest news, events and updates from FABS, in your inbox.
          </p>

          {submitted ? (
            <p className="mt-6 text-sm font-medium text-brand">
              You're subscribed. Look out for our next update.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-0"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border border-line sm:border-r-0 px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 bg-white min-h-[44px]"
              />
              <button
                type="submit"
                className="bg-brand text-white font-semibold text-sm px-6 py-3 min-h-[44px] hover:bg-brand-dark transition-colors"
              >
                Sign up
              </button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}