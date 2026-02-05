
import { Card } from "./Card";

export function StepCard({ number, text }) {
  return (
    <Card>
      <div
        style={{
          fontSize: "2.2rem",
          fontWeight: 700,
          marginBottom: "0.6rem",
          color: "var(--accent)"
        }}
      >
        {number}
      </div>
      <p style={{ color: "var(--muted)", lineHeight: 1.5 }}>{text}</p>
    </Card>
  );
}
