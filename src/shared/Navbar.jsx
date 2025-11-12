import { Link, NavLink } from "react-router";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { useContext, useState } from "react";
import { LogIn, LogOut, Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { Input } from "../components/ui/input";
import { AuthContext } from "../contexts/AuthContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products/plants" },
    { name: "Blog", path: "/blog" },
    { name: "Plant Clinic", path: "/clinic" },
  ];
  const { signOutUser,user, signInWithGoogle  } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await signOutUser();
      console.log("Logged out successfully!");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      console.log("Logged in with Google:", result.user);
    } catch (error) {
      console.error("Google login failed:", error.message);
    }
  };
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full fixed top-0 left-0 z-50 bg-primary text-primary-foreground shadow-sm"
    >
      <div className="container mx-auto flex items-center justify-between px-8 py-4">
        {/* Left: Logo */}
        <NavLink
          to="/"
          className="text-xl font-semibold flex items-center gap-2 whitespace-nowrap"
        >
          <span>
            <span className="text-accent text-4xl">T</span>ri
            <span className="text-accent text-4xl">G</span>ardening
          </span>
        </NavLink>

        {/* Center: Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 hover:text-accent-foreground ${
                  isActive ? "text-accent" : "text-secondary-foreground"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right: Search + Icons */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="hidden md:flex items-center gap-4"
        >
          {/* Search Field */}
          <div className="relative w-56">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search plants, tools..."
              className="pl-9 rounded-full border border-secondary bg-transparent text-secondary focus-visible:ring-accent focus-visible:ring-2"
            />
          </div>

          {/* Cart Icon */}
          <div className="relative">
            <Link to="/cart"><Button
              variant="ghost"
              size="icon"
              className="rounded-full text-secondary"
            >
              <ShoppingCart className="h-5 w-5" />
            </Button></Link>
            <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full shadow-sm">
              3
            </span>
          </div>

          {/* User Icon */}
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-secondary"
          >
            <User className="h-5 w-5" />
          </Button>

          {/* Call Now Button */}
          <Button className="bg-[#CC7722] text-accent-foreground hover:bg-[#CC7722] font-medium">
            Call Now
          </Button>
          {user ? (
            <Button
              onClick={handleLogout}
              variant=""
              className="bg-[#CC7722] text-accent-foreground hover:bg-[#CC7722] font-medium"
            >
              <LogOut />logout
            </Button>
          ) : (
            <Button
              variant=""
              onClick={handleGoogleLogin}
              className="bg-[#CC7722] text-accent-foreground hover:bg-[#CC7722] font-medium"
            >
              <LogIn />login
            </Button>
          )}
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-primary/20 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="md:hidden bg-primary/95 text-primary-foreground flex flex-col items-center gap-4 py-4 border-t border-border"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 hover:text-accent-foreground ${
                  isActive ? "text-accent" : "text-secondary-foreground"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
          <Button
            className=" bg-[#CC7722]
          font-sm"
          >
            Call Now
          </Button>
          <Button
            onClick={handleLogout}
            variant=""
            className="flex items-center gap-2 border border-secondary rounded-xl px-4 py-2 hover:bg-accent/10"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </Button>
        </motion.nav>
      )}
    </motion.header>
  );
}
