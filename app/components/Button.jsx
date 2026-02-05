
export function Button({ children, href = "#", variant = "primary" }) {
  const base = {
    padding: "1rem 2rem",
    borderRadius: "12px",
    fontWeight: 600,
    fontSize: "1.05rem",
    textDecoration: "none",
    display: "inline-block",
    transition: "var(--transition)"
  };

  const styles = {
    primary: {
      ...base,
      background: "var(--accent)",
      color: "white"
    },
    secondary: {
      ...base,
      background: "transparent",
      border: "1px solid var(--border)",
      color: "var(--fg)"
    }
  };

  return (
    <a href={href} style={styles[variant]}>
      {children}
    </a>
  );
}
