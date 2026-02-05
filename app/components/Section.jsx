export function Section({ children, width = "900px", center = false }) {
  return (
    <section
      style={{
        padding: "var(--space-2xl) var(--space-lg)",
        maxWidth: width,
        margin: "0 auto",
        textAlign: center ? "center" : "left"
      }}
    >
      {children}
    </section>
  );
}

