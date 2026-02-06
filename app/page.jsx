import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Section } from "./components/Section";
import { SectionHeader } from "./components/SectionHeader";
import { FeatureCard } from "./components/FeatureCard";
import { StepCard } from "./components/StepCard";
import { Button } from "./components/Button";

export default function Home() {
  return (
    <main style={{ width: "100%", overflow: "hidden" }}>
      <Navbar />

      <Section>
        <h1
          style={{
            fontSize: "var(--text-hero)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            marginBottom: "var(--space-sm)"
          }}
        >
          Apex Copilot
        </h1>

        <p
          style={{
            color: "var(--muted)",
            marginBottom: "var(--space-xl)",
            fontSize: "1.2rem",
            lineHeight: 1.6
          }}
        >
          The intelligence layer for modern driving. Clear. Calm. Confident. Always with you.
        </p>

        <Button>Join the Waitlist</Button>
      </Section>

      <Section width="1100px">
        <SectionHeader
          title="Built for clarity and confidence"
          subtitle="Apex Copilot brings real‑time intelligence to every drive. From vehicle health insights to AI‑powered diagnostics, it’s designed to keep you informed, prepared, and in control."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2.5rem"
          }}
        >
          <FeatureCard
            title="Vehicle Health"
            text="Live monitoring that keeps you ahead of issues before they become problems."
          />
          <FeatureCard
            title="AI Diagnostics"
            text="Explain issues in plain language and get actionable next steps instantly."
          />
          <FeatureCard
            title="Drive Insights"
            text="Understand your driving patterns and optimize for safety and efficiency."
          />
        </div>
      </Section>

      <Section center>
        <SectionHeader
          title="How Apex Copilot Works"
          subtitle="Apex Copilot connects to your vehicle, analyzes real‑time data, and delivers insights that help you stay prepared and confident."
          center
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2.5rem"
          }}
        >
          <StepCard number="1" text="Connect your vehicle" />
          <StepCard number="2" text="Get real‑time insights" />
          <StepCard number="3" text="Drive with confidence" />
        </div>
      </Section>

      <Section center width="100%">
        <section
          style={{
            padding: "6rem 2rem",
            textAlign: "center",
            background: "#111",
            marginTop: "5rem"
          }}
        >
          <h2 style={{ fontSize: "var(--text-h1)", marginBottom: "1rem" }}>
            Be one of the first to experience Apex Copilot
          </h2>

          <section
            className="glow"
            style={{
              background: "#111",
              padding: "6rem 2rem",
              borderRadius: "20px"
            }}
          >
            <p
              style={{
                color: "var(--muted)",
                marginBottom: "2.5rem",
                fontSize: "1.1rem"
              }}
            >
              Join the waitlist and get early access.
            </p>

            <Button>Join the Waitlist</Button>
          </section>
        </section>
      </Section>

      <Footer />
    </main>
  );
}
