export function Card({ children }) {
  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "14px",
        padding: "var(--space-lg)",
        transition: "var(--transition)"
      }}
    >
      {children}
    </div>
  );
}

