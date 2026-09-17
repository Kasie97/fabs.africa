import { Link } from "react-router-dom";

const base =
  "inline-flex items-center justify-center gap-2 px-6 py-3 text-[15px] font-semibold transition-colors duration-150 focus-visible:outline-2";

const variants = {
  primary: "bg-gold text-ink hover:bg-gold-dark",
  outline: "border border-ink text-ink hover:bg-ink hover:text-white",
  ghost: "text-ink hover:text-gold-dark",
  inverse: "bg-white text-ink hover:bg-paper",
};

export default function Button({ to, href, variant = "primary", children, className = "" }) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button className={cls}>{children}</button>;
}
