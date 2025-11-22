export function Footer() {
  return (
    <footer style={{
      "margin-top": "4rem",
      "padding": "2rem 0",
      "text-align": "center",
      "color": "#64748b",
      "font-size": "0.875rem"
    }}>
      <p>© {new Date().getFullYear()} Eduardo Valenzuela — Construido con 🔷 Solid</p>
    </footer>
  );
}

export default Footer;
