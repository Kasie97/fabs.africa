import Hero from "../components/home/Hero";
import UpdatesGrid from "../components/home/UpdatesGrid";
import MembershipBand from "../components/home/MembershipBand";
import NewsletterStrip from "../components/home/NewsletterStrip";

export default function Home() {
  return (
    <>
      <Hero />
      <UpdatesGrid />
      <MembershipBand />
      <NewsletterStrip />
    </>
  );
}
