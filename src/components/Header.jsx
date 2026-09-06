import { useState } from "react";
import { Menu, X } from "lucide-react";
import NavBar from "./NavBar";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="nav-shell">
        <a className="brand-mark" href="#home" onClick={closeMenu} aria-label="Shelby Haines home">
          <span>SH</span>
          <strong>Shelby Haines</strong>
        </a>

        <NavBar isOpen={menuOpen} onNavigate={closeMenu} />

        <div className="header-actions">
          <button
            className="icon-button menu-button"
            type="button"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
