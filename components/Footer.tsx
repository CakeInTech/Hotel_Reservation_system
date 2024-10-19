import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background shadow-md mt-8">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Hotel Name</h3>
            <p className="text-muted-foreground">
              Your perfect getaway in the heart of Kenya.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/rooms"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Rooms
                </Link>
              </li>
              <li>
                <Link
                  href="/amenities"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Amenities
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-muted-foreground">123 hotel name Street</p>
            <p className="text-muted-foreground">Nairobi, Kenya</p>
            <p className="text-muted-foreground">Phone: +254 123 456 789</p>
            <p className="text-muted-foreground">Email: info@hotelname.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; 2024 Hotel Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
