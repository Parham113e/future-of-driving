
export function SectionHeader({ title, subtitle, center = false }) {
  return (
    <div
      style={{
        textAlign: center ? "center" : "left",
        marginBottom: "var(--space-xl)"
      }}
    >
      <h2
        style={{
          fontSize: "var(--text-h1)",
          marginBottom: "var(--space-sm)"
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            color: "var(--muted)",
            maxWidth: "700px",
            lineHeight: 1.6
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
