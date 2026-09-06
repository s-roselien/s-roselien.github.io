const navItems = [
  { href: "#home", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

function NavBar({ isOpen, onNavigate }) {
  return (
    <nav className={`site-nav ${isOpen ? "is-open" : ""}`} aria-label="Primary navigation">
      {navItems.map((item) => (
        <a key={item.href} href={item.href} onClick={onNavigate}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;
