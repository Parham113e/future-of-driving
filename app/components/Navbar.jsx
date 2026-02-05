
export function Navbar() {
  return (
    <nav
      style={{
        width: "100%",
        padding: "1.5rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        background: "rgba(10,10,10,0.8)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--border)",
        zIndex: 50
      }}
    >
      <div style={{ fontWeight: 700, fontSize: "1.2rem" }}>Apex Copilot</div>

      <div style={{ display: "flex", gap: "1.5rem", color: "var(--muted)" }}>
        <a href="#" style={{ textDecoration: "none", color: "var(--muted)" }}>
          Features
        </a>
        <a href="#" style={{ textDecoration: "none", color: "var(--muted)" }}>
          How It Works
        </a>
        <a href="#" style={{ textDecoration: "none", color: "var(--muted)" }}>
          Contact
        </a>
      </div>
    </nav>
  );
}
