import { Link } from "react-router";
import { ExternalLink, Facebook, Heart, Instagram, Twitter, Youtube } from "lucide-react";

const Footer=()=> {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-3">TriGardening</h3>
            <p className="text-primary-foreground/80 text-sm">
              Your slogan goes here
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/shippings"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Shippings
                </Link>
              </li>
              <li>
                <Link
                  to="/referral"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Referral Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products/plants"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Plants
                </Link>
              </li>
              <li>
                <Link
                  to="/products/tools"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Tools
                </Link>
              </li>
              <li>
                <Link
                  to="/products/fertilizers"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Fertilizers
                </Link>
              </li>
              <li>
                <Link
                  to="/products/pesticides"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Pesticides
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-3 mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <a
              href="mailto:supprot@trigardening.com"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm block mb-4"
            >
              supprot@trigardening.com
            </a>
            <div>
              <p className="font-semibold mb-1">Call Now</p>
              <a
                href="tel:+8801234567890"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                +8801234567890
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-6">
          <p className="text-center text-primary-foreground/70 text-sm">
            © 2025 TriGardening. All Rights Reserved
          </p>
          <p className="text-beige/80 text-center  text-sm flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-400 fill-current" /> by{' '}
              <a
                href="https://shahadatrifat.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-emerald-300 font-semibold inline-flex items-center gap-1 transition-colors group"
              >
                Shahadat Hossain Rifat
                <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </p>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;