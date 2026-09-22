import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ChevronDown,
  ChevronRight,
  Menu,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";
import {
  nav,
  registerLink,
  contactLink,
  contactInfo,
} from "../../data/navigation";
import Container from "../ui/Container";
import SocialLinks from "../ui/SocialIcons";
import MobileNav from "./MobileNav";

// A single dropdown row. Renders as a plain link, or — when it has its own
// children (e.g. "FABS 2025" inside "Past Events") — as a row that opens a
// second flyout menu to the right on hover.
function DropdownChild({ child, onNavigate }) {
  const [subOpen, setSubOpen] = useState(false);
  const closeTimer = useRef(null);
  const hasChildren = !!child.children?.length;

  const openSub = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setSubOpen(true);
  };

  const scheduleCloseSub = () => {
    closeTimer.current = setTimeout(() => setSubOpen(false), 120);
  };

  if (!hasChildren) {
    return (
      <li>
        <Link
          to={child.path}
          className="block px-5 py-3 text-[15px] font-medium text-ink whitespace-nowrap hover:bg-paper hover:text-brand"
          onClick={onNavigate}
        >
          {child.label}
        </Link>
      </li>
    );
  }

  return (
    <li
      className="relative"
      onMouseEnter={openSub}
      onMouseLeave={scheduleCloseSub}
    >
      <Link
        to={child.path}
        className="flex items-center justify-between gap-4 px-5 py-3 text-[15px] font-medium text-ink whitespace-nowrap hover:bg-paper hover:text-brand"
        onClick={onNavigate}
      >
        {child.label}
        <ChevronRight size={14} />
      </Link>

      {subOpen && (
        <ul
          className="absolute left-full top-0 min-w-[220px] bg-white shadow-lg py-2 animate-fade-up"
          style={{ animationDuration: "0.15s" }}
        >
          {child.children.map((grandchild) => (
            <li key={grandchild.path}>
              <Link
                to={grandchild.path}
                className="block px-5 py-3 text-[15px] font-medium text-ink whitespace-nowrap hover:bg-paper hover:text-brand"
                onClick={onNavigate}
              >
                {grandchild.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

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
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenIndex(idx);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenIndex(null), 120);
  };

  return (
    <header className="sticky top-0 z-40 bg-white">
      {/* Contact bar — hidden below xl to save space */}
      <div className="hidden xl:block bg-brand text-white">
        <Container>
          <div className="flex items-center justify-between py-3 text-sm">
            <div className="flex items-center gap-8">
              <a
                href={contactInfo.phoneHref}
                className="inline-flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Phone size={15} />
                {contactInfo.phone}
              </a>

              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail size={15} />
                {contactInfo.email}
              </a>
            </div>

            <div className="flex items-center gap-5">
              <SocialLinks />

              <label htmlFor="lang-select" className="sr-only">
                Language
              </label>

              <select
                id="lang-select"
                defaultValue="en"
                className="bg-white text-ink text-xs font-medium px-2 py-1.5 min-w-[110px]"
              >
                <option value="en">English</option>
                <option value="fr">Français</option>
              </select>
            </div>
          </div>
        </Container>
      </div>

      {/* Main nav */}
      <div className="border-b border-line">
        <Container>
          <div className="flex items-center justify-between h-20 xl:h-24">
            {/* Logo */}
            <Link
              to="/"
              className="shrink-0"
              aria-label="Francophone Africa Business Summit — home"
            >
              <img
                src="/media/fabslogo.png"
                alt="Francophone Africa Business Summit"
                className="h-12 xl:h-16 w-auto"
              />
            </Link>

            {/* Desktop nav */}
            <nav
              className="hidden xl:flex items-center gap-2"
              aria-label="Primary"
            >
              {nav.map((item, idx) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => {
                    if (item.children) openMenu(idx);
                  }}
                  onMouseLeave={() => {
                    if (item.children) scheduleClose();
                  }}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-1 px-3 py-2 text-[16px] font-medium transition-colors ${
                        isActive ? "text-brand" : "text-ink hover:text-brand"
                      }`
                    }
                    aria-expanded={item.children ? openIndex === idx : undefined}
                    aria-haspopup={item.children ? true : undefined}
                    onClick={() => {
                      if (item.children) {
                        setOpenIndex(openIndex === idx ? null : idx);
                      }
                    }}
                  >
                    {item.label}

                    {item.children && (
                      <ChevronDown
                        size={15}
                        className={`transition-transform ${
                          openIndex === idx ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </NavLink>

                  {/* Dropdown */}
                  {item.children && openIndex === idx && (
                    <div
                      className="absolute left-0 top-full pt-2 min-w-[220px] animate-fade-up"
                      style={{ animationDuration: "0.15s" }}
                    >
                      <ul className="bg-white shadow-lg py-2">
                        {item.children.map((child) => (
                          <DropdownChild
                            key={child.path}
                            child={child}
                            onNavigate={() => setOpenIndex(null)}
                          />
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}

              {/* Contact Us — plain link, no dropdown, sits between the
                  grouped nav items and the Register button. */}
              <NavLink
                to={contactLink.path}
                className={({ isActive }) =>
                  `flex items-center gap-1 px-3 py-2 text-[16px] font-medium transition-colors ${
                    isActive ? "text-brand" : "text-ink hover:text-brand"
                  }`
                }
              >
                {contactLink.label}
              </NavLink>
            </nav>

            {/* Register button and mobile menu */}
            <div className="flex items-center gap-3">
              <Link
                to={registerLink.path}
                className="hidden xl:inline-flex items-center gap-2 bg-gradient-to-r from-brand to-accent text-white font-semibold text-[16px] px-7 py-4 hover:brightness-110 transition"
              >
                {registerLink.label}
                <ArrowRight size={18} />
              </Link>

              <button
                type="button"
                className="xl:hidden p-2 -mr-2 text-ink"
                aria-label="Open menu"
                onClick={() => setMobileOpen(true)}
              >
                <Menu size={26} />
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Mobile navigation */}
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}