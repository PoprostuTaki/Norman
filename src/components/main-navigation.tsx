import { navLinks } from "@/lib/consts";
import { Link } from "@tanstack/react-router";

export default function MainNavigation() {
  return (
    <nav className="hidden md:flex gap-4">
      {navLinks.map((link) => (
        <Link key={link.label} className="[&.active]:font-bold" to={link.href}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
