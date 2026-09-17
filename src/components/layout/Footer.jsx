import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import Container from "../ui/Container";
import { footerAbout, footerResources } from "../../data/navigation";

// lucide-react no longer ships brand/logo icons — small local SVGs instead.
function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.24h4.56V23H.22V8.24zM8.4 8.24h4.37v2.01h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V23h-4.56v-6.98c0-1.67-.03-3.81-2.32-3.81-2.33 0-2.69 1.82-2.69 3.7V23H8.4V8.24z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkColumn({ title, links }) {
  return (
    <div>
      <h3 className="font-display text-lg text-white mb-4">{title}</h3>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.path}>
            <Link to={l.path} className="text-sm text-white/70 hover:text-gold transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <Container className="py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <LinkColumn title="About AVCA" links={footerAbout} />
          <LinkColumn title="Resources" links={footerResources} />

          <div>
            <h3 className="font-display text-lg text-white mb-4">Contact</h3>
            <a
              href="tel:+4402038747008"
              className="flex items-center gap-2 text-sm text-white/70 hover:text-gold mb-2.5"
            >
              <Phone size={15} /> +44 (0)20 3874 7008
            </a>
            <a
              href="mailto:avca@avca.africa"
              className="flex items-center gap-2 text-sm text-white/70 hover:text-gold"
            >
              <Mail size={15} /> avca@avca.africa
            </a>
          </div>

          <div>
            <h3 className="font-display text-lg text-white mb-4">Follow</h3>
            <div className="flex gap-3 mb-6">
              <a
                href="https://www.linkedin.com/company/african-private-capital-association/"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center border border-white/20 hover:border-gold hover:text-gold transition-colors"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://twitter.com/avca_africa"
                aria-label="X (formerly Twitter)"
                className="w-10 h-10 flex items-center justify-center border border-white/20 hover:border-gold hover:text-gold transition-colors"
              >
                <XIcon />
              </a>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              African Private Equity and Venture Capital Association
              <br />
              37 North Row
              <br />
              London W1K 6DH
              <br />
              United Kingdom
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-2 sm:gap-6 text-xs text-white/50">
          <span>© {new Date().getFullYear()} AVCA</span>
          <span>Registered in England &amp; Wales No. 07877196. Registered Office: 37 North Row, London W1K 6DH</span>
        </div>
      </Container>
    </footer>
  );
}
