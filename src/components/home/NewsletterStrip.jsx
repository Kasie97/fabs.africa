// src/components/home/NewsletterStrip.jsx
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
    <section className="py-9 sm:py-12">
      <Container>
        <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border border-line bg-white p-5 text-center shadow-lg sm:p-7">
          <div
            className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent/15 blur-2xl"
            aria-hidden="true"
          />

          <span className="relative mx-auto flex h-8 w-8 items-center justify-center rounded-xl bg-brand/10 text-brand">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
          </span>

          <h2 className="relative mt-3 font-display text-lg font-bold text-ink sm:text-xl">
            Subscribe to our newsletter
          </h2>
          <p className="relative mt-1 text-xs text-ink-soft">
            The latest news, events and updates from FABS, in your inbox.
          </p>

          {submitted ? (
            <p
              className="relative mt-4 rounded-lg bg-brand/10 px-3 py-2 text-xs font-medium text-brand"
              role="status"
            >
              You're subscribed. Look out for our next update.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="relative mt-4 flex flex-col gap-2 sm:flex-row"
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
                className="min-h-[36px] flex-1 rounded-full border border-line bg-white px-4 py-2 text-xs text-ink placeholder:text-ink-soft/60 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
              />
              <button
                type="submit"
                className="min-h-[36px] rounded-full bg-brand px-5 py-2 text-xs font-semibold text-white shadow-md shadow-brand/30 transition hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-lg"
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