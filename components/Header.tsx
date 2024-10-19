"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Hotel Name
        </Link>
        <nav className="hidden md:flex space-x-4 items-center">
          <Link
            href="/rooms"
            className="text-foreground hover:text-primary transition-colors"
          >
            Rooms
          </Link>

          <Link
            href="/about"
            className="text-foreground hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact
          </Link>
          <Button asChild>
            <Link href="/book">Book Now</Link>
          </Button>
          <ModeToggle />
        </nav>
        <div className="md:hidden flex items-center">
          <ModeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="ml-2 p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background py-2">
          <div className="container mx-auto px-4 flex flex-col space-y-2">
            <Link
              href="/rooms"
              className="text-foreground hover:text-primary transition-colors py-2"
            >
              Rooms
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition-colors py-2"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition-colors py-2"
            >
              Contact
            </Link>
            <Button asChild className="w-full">
              <Link href="/book">Book Now</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
