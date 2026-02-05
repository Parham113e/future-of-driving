export function Footer() {
  return (
    <footer
      style={{
        padding: "3rem 2rem",
        textAlign: "center",
        color: "var(--muted)",
        fontSize: "0.9rem",
        borderTop: "1px solid var(--border)",
        marginTop: "4rem"
      }}
    >
      © {new Date().getFullYear()} Apex Copilot. All rights reserved.
    </footer>
  );
}

