import { useState } from "react";
import { Link } from "react-router-dom";
import { X, ChevronDown, Phone, Mail } from "lucide-react";
import { nav, registerLink, contactInfo } from "../../data/navigation";
import SocialLinks from "../ui/SocialIcons";

export default function MobileNav({ open, onClose }) {
  const [expanded, setExpanded] = useState(null);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 xl:hidden">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close menu"
        className="absolute inset-0 bg-ink/50"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-xl flex flex-col animate-drawer-in">
        <div className="flex items-center justify-between h-20 px-5 border-b border-line shrink-0">
          <img
            src="/media/fabs-logo.png"
            alt="Francophone Africa Business Summit"
            className="h-10 w-auto"
          />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 -mr-2 text-ink"
          >
            <X size={26} />
          </button>
        </div>

        <nav
          className="flex-1 overflow-y-auto px-5 py-4"
          aria-label="Mobile primary"
        >
          <ul className="divide-y divide-line">
            {nav.map((item, idx) => (
              <li key={item.label}>
                {item.children ? (
                  <>
                    <button
                      type="button"
                      className="w-full flex items-center justify-between py-4 text-left text-[17px] font-medium text-ink min-h-[44px]"
                      aria-expanded={expanded === idx}
                      onClick={() =>
                        setExpanded(expanded === idx ? null : idx)
                      }
                    >
                      {item.label}

                      <ChevronDown
                        size={20}
                        className={`text-ink-soft transition-transform ${
                          expanded === idx ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {expanded === idx && (
                      <ul className="pb-3 pl-3">
                        {item.children.map((child) => (
                          <li key={child.path}>
                            <Link
                              to={child.path}
                              onClick={onClose}
                              className="py-3 text-[15px] text-ink-soft min-h-[44px] flex items-center"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    onClick={onClose}
                    className="flex items-center py-4 text-[17px] font-medium text-ink min-h-[44px]"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-4 pt-4 border-t border-line space-y-1 text-sm text-ink-soft">
            <a
              href={contactInfo.phoneHref}
              className="flex items-center gap-2 py-3 min-h-[44px]"
            >
              <Phone size={15} />
              {contactInfo.phone}
            </a>

            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-2 py-3 min-h-[44px]"
            >
              <Mail size={15} />
              {contactInfo.email}
            </a>

            <SocialLinks className="pt-3 text-brand" />
          </div>
        </nav>

        <div className="p-5 border-t border-line shrink-0">
          <Link
            to={registerLink.path}
            onClick={onClose}
            className="flex items-center justify-center bg-gradient-to-r from-brand to-accent text-white font-semibold py-3.5 w-full"
          >
            {registerLink.label}
          </Link>
        </div>
      </div>
    </div>
  );
}