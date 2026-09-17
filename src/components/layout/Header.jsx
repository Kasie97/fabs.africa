import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Menu } from "lucide-react";
import { nav, utilityLinks } from "../../data/navigation";
import Container from "../ui/Container";
import MobileNav from "./MobileNav";

export default function Header() {
  const [openIndex, setOpenIndex] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => {
    // Lock body scroll while the mobile drawer is open.
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const openMenu = (idx) => {
    clearTimeout(closeTimer.current);
    setOpenIndex(idx);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenIndex(null), 120);
  };

  return (
    <header className="sticky top-0 z-40 bg-white">
      {/* Utility bar — hidden on small screens to save space */}
      <div className="hidden lg:block bg-ink text-white">
        <Container>
          <div className="flex justify-end gap-6 py-2 text-xs">
            {utilityLinks.map((l) => (
              <Link
                key={l.label}
                to={l.path}
                className="text-white/80 hover:text-gold transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>

      {/* Main nav */}
      <div className="border-b border-line">
        <Container>
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="font-display text-2xl font-semibold text-ink tracking-tight shrink-0">
              AVCA
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
              {nav.map((item, idx) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && openMenu(idx)}
                  onMouseLeave={() => item.children && scheduleClose()}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-1 px-3 py-2 text-[15px] font-medium rounded transition-colors ${
                        isActive ? "text-gold-dark" : "text-ink hover:text-gold-dark"
                      }`
                    }
                    aria-expanded={openIndex === idx}
                    aria-haspopup={!!item.children}
                    onClick={() => item.children && setOpenIndex(openIndex === idx ? null : idx)}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        size={15}
                        className={`transition-transform ${openIndex === idx ? "rotate-180" : ""}`}
                      />
                    )}
                  </NavLink>

                  {item.children && openIndex === idx && (
                    <div
                      className="absolute left-0 top-full pt-2 w-64 animate-fade-up"
                      style={{ animationDuration: "0.15s" }}
                    >
                      <ul className="bg-white border border-line shadow-lg py-2">
                        {item.children.map((child) => (
                          <li key={child.path}>
                            <Link
                              to={child.path}
                              className="block px-4 py-2.5 text-sm text-ink-soft hover:bg-paper hover:text-ink"
                              onClick={() => setOpenIndex(null)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Link
                to="/membership"
                className="hidden lg:inline-flex bg-gold text-ink font-semibold text-sm px-5 py-2.5 hover:bg-gold-dark transition-colors"
              >
                Become a member
              </Link>
              <button
                className="lg:hidden p-2 -mr-2 text-ink"
                aria-label="Open menu"
                onClick={() => setMobileOpen(true)}
              >
                <Menu size={26} />
              </button>
            </div>
          </div>
        </Container>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
