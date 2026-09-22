// Inside src/pages/Newsletter.jsx
import { useState } from "react";
import Container from "../components/ui/Container";
import Photo from "../components/ui/Photo";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      {/* Decorative brand squiggles, echoing the site's diagonal-accent motif */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 top-10 h-40 w-40 rotate-12 opacity-70 hidden lg:block"
        style={{
          backgroundImage:
            "linear-gradient(135deg, transparent 45%, var(--color-accent) 45%, var(--color-accent) 55%, transparent 55%)",
        }}
      />

      <Container>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 bg-white shadow-xl overflow-hidden border border-line">
          <div className="hidden md:block relative bg-brand">
            <Photo
              src="/media/newsletter-hero.jpg"
              alt=""
              className="h-full w-full object-cover opacity-80"
            />
          </div>

          <div className="p-8 sm:p-12 flex flex-col justify-center text-center">
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-brand leading-tight">
              Stay Connected – Subscribe to Our Newsletter
            </h1>
            <p className="text-sm text-ink-soft mt-4 leading-relaxed">
              Fill in the form below to subscribe and keep your finger on the pulse of
              Africa's business landscape.
            </p>

            {submitted ? (
              <p className="mt-8 text-sm font-semibold text-brand">
                You're subscribed. Look out for our next update.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-4 text-left">
                <div>
                  <label htmlFor="newsletter-email" className="sr-only">
                    Your email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-line px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 bg-white min-h-[44px]"
                  />
                </div>
                <div>
                  <label htmlFor="newsletter-name" className="sr-only">
                    Your name
                  </label>
                  <input
                    id="newsletter-name"
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-line px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 bg-white min-h-[44px]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-ink text-white font-semibold text-sm px-6 py-3 min-h-[44px] hover:bg-brand transition-colors"
                >
                  Sign up
                </button>
                <p className="text-xs text-ink-soft text-center pt-1">
                  Your email is safe with us, we don't spam.
                </p>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}