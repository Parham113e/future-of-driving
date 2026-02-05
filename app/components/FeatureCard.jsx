import { Card } from "./Card";

export function FeatureCard({ title, text }) {
  return (
    <Card>
      <h3 style={{ fontSize: "1.35rem", marginBottom: "0.6rem" }}>{title}</h3>
      <p style={{ color: "var(--muted)", lineHeight: 1.5 }}>{text}</p>
    </Card>
  );
}

