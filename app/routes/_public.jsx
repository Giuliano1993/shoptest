import { Outlet, Link, useLocation } from "react-router";
import "../showcase.css";

export default function PublicLayout() {
  const location = useLocation();
  
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "Who am I" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="showcase-layout">
      <header style={headerStyle}>
        <div className="container" style={navContainerStyle}>
          <Link to="/" style={logoStyle}>
            DESIGNER<span style={{ color: "var(--color-accent)" }}>.</span>
          </Link>
          <nav>
            <ul style={navListStyle}>
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    style={{
                      ...navLinkStyle,
                      color: location.pathname === link.path ? "var(--color-accent)" : "var(--color-text)"
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main style={{ minHeight: "80vh" }}>
        <Outlet />
      </main>

      <footer style={footerStyle}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Designer Showcase. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

const headerStyle = {
  padding: "var(--spacing-md) 0",
  position: "sticky",
  top: 0,
  backgroundColor: "rgba(10, 10, 10, 0.8)",
  backdropFilter: "blur(10px)",
  zIndex: 100,
  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
};

const navContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const logoStyle = {
  fontFamily: "var(--font-display)",
  fontSize: "1.5rem",
  fontWeight: "bold",
  letterSpacing: "-0.05em",
};

const navListStyle = {
  display: "flex",
  gap: "var(--spacing-md)",
  listStyle: "none",
};

const navLinkStyle = {
  fontSize: "0.9rem",
  fontWeight: "500",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
};

const footerStyle = {
  padding: "var(--spacing-lg) 0",
  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
  marginTop: "var(--spacing-lg)",
  textAlign: "center",
  color: "#888",
};
