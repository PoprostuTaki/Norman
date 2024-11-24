import { navLinks } from "@/lib/consts";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { AlignJustify } from "lucide-react";
import { Link } from "@tanstack/react-router";

export default function MobileNavigation() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <AlignJustify />
        </SheetTrigger>
        <SheetContent className="flex items-center justify-center">
          <nav className="flex flex-col gap-4 flex-1 text-center">
            {navLinks.map((link) => (
              <SheetClose asChild>
                <Link
                  key={link.label}
                  className="[&.active]:font-bold"
                  to={link.href}
                >
                  {link.label}
                </Link>
              </SheetClose>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
